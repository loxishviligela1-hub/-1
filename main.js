const { program } = require('commander');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'expenses.json');


function loadExpenses() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('error reading data file:', e.message);
    return [];
  }
}

function saveExpenses(expenses) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2), 'utf8');
  } catch (e) {
    console.error('error writing data file:', e.message);
  }
}

function generateId() {
  
  return Date.now().toString(36) + Math.floor(Math.random() * 10000).toString(36);
}

function parseDateOnly(isoString) {
  
  return new Date(isoString).toISOString().slice(0, 10);
}


function createExpense({ category, price, note }) {
  if (!category) {
    console.error('დაფიქსირდა შეცდომა: კატეგორია აუცილებელია. (-c ან --category)');
    process.exit(1);
  }
  const priceNum = Number(price);
  if (isNaN(priceNum)) {
    console.error('დაფიქსირდა შეცდომა: თანხა უნდა იყოს რიცხვი.');
    process.exit(1);
  }
  if (priceNum < 10) {
    console.error('დაფიქსირდა შეცდომა: თანხა უნდა იყოს მინიმუმ 10.');
    process.exit(1);
  }

  const expenses = loadExpenses();
  const newExpense = {
    id: generateId(),
    category,
    price: priceNum,
    note: note || '',
    createdAt: new Date().toISOString()
  };
  expenses.push(newExpense);
  saveExpenses(expenses);
  console.log('შენახულია წარმატებით:');
  console.log(newExpense);
}

function showExpenses({ sort, category, page = 1, limit = 5 }) {
  let expenses = loadExpenses();

  
  if (category) {
    expenses = expenses.filter(e => String(e.category).toLowerCase() === String(category).toLowerCase());
  }

  
  if (sort === 'asc') {
    expenses.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (sort === 'desc') {
    expenses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  
  page = Number(page) || 1;
  limit = Number(limit) || 5;
  const total = expenses.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  if (page < 1) page = 1;
  if (page > pages) page = pages;

  const start = (page - 1) * limit;
  const paged = expenses.slice(start, start + limit);

  console.log(`მოგიღებული ${paged.length} ჩანაწერი (გვერდი ${page}/${pages}, სულ ${total}):`);
  paged.forEach(e => {
    console.log('--------------------');
    console.log(`id: ${e.id}`);
    console.log(`category: ${e.category}`);
    console.log(`price: ${e.price}`);
    console.log(`createdAt: ${e.createdAt}`);
    if (e.note) console.log(`note: ${e.note}`);
  });
  console.log('--------------------');
}

function getById(id) {
  if (!id) {
    console.error('მიუთითეთ id: expense-cli get <id>');
    process.exit(1);
  }
  const expenses = loadExpenses();
  const found = expenses.find(e => e.id === id);
  if (!found) {
    console.error(' ჩანაწერი ვერ მოიძებნა id-ით:', id);
    process.exit(1);
  }
  console.log('ჩანაწერი:', found);
}

function updateExpense(id, { category, price, note }) {
  if (!id) {
    console.error('მიუთითეთ id: expense-cli update <id> -c ... -p ...');
    process.exit(1);
  }
  const expenses = loadExpenses();
  const idx = expenses.findIndex(e => e.id === id);
  if (idx === -1) {
    console.error('ჩანაწერი არაა დაფიქსირებული ამ id-ით:', id);
    process.exit(1);
  }

  if (price !== undefined) {
    const priceNum = Number(price);
    if (isNaN(priceNum)) {
      console.error('რიცხვითი მნიშვნელობაა საჭირო price-სთვის.');
      process.exit(1);
    }
    if (priceNum < 10) {
      console.error('დაფიქსირდა შეცდომა: თანხა უნდა იყოს მინიმუმ 10.');
      process.exit(1);
    }
    expenses[idx].price = priceNum;
  }

  if (category !== undefined) {
    expenses[idx].category = category;
  }

  if (note !== undefined) {
    expenses[idx].note = note;
  }

  
  saveExpenses(expenses);
  console.log('განახლდა წარმატებით:', expenses[idx]);
}

function deleteExpense(id) {
  if (!id) {
    console.error('მიუთითეთ id: expense-cli delete <id>');
    process.exit(1);
  }
  let expenses = loadExpenses();
  const idx = expenses.findIndex(e => e.id === id);
  if (idx === -1) {
    console.error('ჩანაწერი არაა დაფიქსირებული ამ id-ით:', id);
    process.exit(1);
  }
  const removed = expenses.splice(idx, 1)[0];
  saveExpenses(expenses);
  console.log('წაიშალა წარმატებით:', removed);
}

function searchByDate(dateStr) {
  
  if (!dateStr) {
    console.error('მიუთითეთ თარიღი ფორმატში YYYY-MM-DD: expense-cli search 2025-01-02');
    process.exit(1);
  }

  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) {
    console.error('არასწორი თარიღი. საჭირო ფორმატი: YYYY-MM-DD');
    process.exit(1);
  }
  const target = parsed.toISOString().slice(0, 10);
  const expenses = loadExpenses();
  const found = expenses.filter(e => parseDateOnly(e.createdAt) === target);
  console.log(`მოვიძებნა ${found.length} ჩანაწერი თარიღისთვის ${target}:`);
  found.forEach(e => {
    console.log('--------------------');
    console.log(`id: ${e.id}`);
    console.log(`category: ${e.category}`);
    console.log(`price: ${e.price}`);
    console.log(`createdAt: ${e.createdAt}`);
    if (e.note) console.log(`note: ${e.note}`);
  });
  console.log('--------------------');
}


program
  .command('add')
  .description('შექმენით ახალი ხარჯი')
  .requiredOption('-c, --category <category>', 'კატეგორია (მაგ., shopping)')
  .requiredOption('-p, --price <price>', 'თანხა (რაოდენობა)')
  .option('-n, --note <note>', 'შენიშვნა')
  .action((opts) => {
    createExpense(opts);
  });


program
  .command('show')
  .description('აჩვენე ყველა ხარჯი (პაგინეაცია, სორტირება, კატეგორია)')
  .option('--asc', 'დალაგება ეზომ ზრდით createdAt მიხედვით')
  .option('--desc', 'დალაგება ეზომ კლებით createdAt მიხედვით')
  .option('-c, --category <category>', 'გაფილტრე კატეგორიით')
  .option('--page <page>', 'გვერდი (პაგინეაცია)', '1')
  .option('--limit <limit>', 'ხარისხი გვერდზე', '5')
  .action((opts) => {
    let sort = null;
    if (opts.asc) sort = 'asc';
    if (opts.desc) sort = 'desc';
    showExpenses({ sort, category: opts.category, page: opts.page, limit: opts.limit });
  });


program
  .command('get <id>')
  .description('მიიღე ხარჯი id-ის მიხედვით')
  .action((id) => {
    getById(id);
  });

program
  .command('update <id>')
  .description('განაახლე ხარჯი (შეიყვანეთ ის ველები რომლებსაც ცვლით)')
  .option('-c, --category <category>', 'კატეგორია')
  .option('-p, --price <price>', 'თანხა')
  .option('-n, --note <note>', 'შენიშვნა')
  .action((id, opts) => {
    updateExpense(id, opts);
  });

program
  .command('delete <id>')
  .description('წაშალე ხარჯი id-ის მიხედვით')
  .action((id) => {
    deleteExpense(id);
  });


program
  .command('search <date>')
  .description('ძებნა თარიღით (YYYY-MM-DD)')
  .action((date) => {
    searchByDate(date);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
