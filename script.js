/* script.js - cart + placeholders + whatsapp prefill (generated) */
const SITE_WA = 'https://wa.me/9220732618';
const PRICE_PER = 9;
const IMAGE_LIST = [
  {id: 'sticker-1', file: 'images/white-sticker-01.png', name: 'White Sticker 01'},
  {id: 'sticker-2', file: 'images/white-sticker-02.png', name: 'White Sticker 02'},
  {id: 'sticker-3', file: 'images/white-sticker-03.png', name: 'White Sticker 03'},
  {id: 'sticker-4', file: 'images/white-sticker-04.png', name: 'White Sticker 04'},
  {id: 'sticker-5', file: 'images/white-sticker-05.png', name: 'White Sticker 05'},
  {id: 'sticker-6', file: 'images/white-sticker-06.png', name: 'White Sticker 06'},
  {id: 'sticker-7', file: 'images/white-sticker-07.png', name: 'White Sticker 07'},
  {id: 'sticker-8', file: 'images/white-sticker-08.png', name: 'White Sticker 08'},
  {id: 'sticker-9', file: 'images/white-sticker-09.png', name: 'White Sticker 09'},
  {id: 'sticker-10', file: 'images/white-sticker-10.png', name: 'White Sticker 10'},
  {id: 'sticker-11', file: 'images/white-sticker-11.png', name: 'White Sticker 11'},
  {id: 'sticker-12', file: 'images/white-sticker-12.png', name: 'White Sticker 12'},
  {id: 'sticker-13', file: 'images/white-sticker-13.png', name: 'White Sticker 13'},
  {id: 'sticker-14', file: 'images/white-sticker-14.png', name: 'White Sticker 14'},
  {id: 'sticker-15', file: 'images/white-sticker-15.png', name: 'White Sticker 15'},
  {id: 'sticker-16', file: 'images/white-sticker-16.png', name: 'White Sticker 16'},
  {id: 'sticker-17', file: 'images/white-sticker-17.png', name: 'White Sticker 17'},
  {id: 'sticker-18', file: 'images/white-sticker-18.png', name: 'White Sticker 18'},
  {id: 'sticker-19', file: 'images/white-sticker-19.png', name: 'White Sticker 19'},
  {id: 'sticker-20', file: 'images/white-sticker-20.png', name: 'White Sticker 20'},
  {id: 'sticker-21', file: 'images/white-sticker-21.png', name: 'White Sticker 21'},
  {id: 'sticker-22', file: 'images/white-sticker-22.png', name: 'White Sticker 22'},
  {id: 'sticker-23', file: 'images/white-sticker-23.png', name: 'White Sticker 23'},
  {id: 'sticker-24', file: 'images/white-sticker-24.png', name: 'White Sticker 24'},
  {id: 'sticker-25', file: 'images/white-sticker-25.png', name: 'White Sticker 25'},
  {id: 'sticker-26', file: 'images/white-sticker-26.png', name: 'White Sticker 26'},
  {id: 'sticker-27', file: 'images/white-sticker-27.png', name: 'White Sticker 27'},
  {id: 'sticker-28', file: 'images/white-sticker-28.png', name: 'White Sticker 28'},
  {id: 'sticker-29', file: 'images/white-sticker-29.png', name: 'White Sticker 29'},
  {id: 'sticker-30', file: 'images/white-sticker-30.png', name: 'White Sticker 30'},
  {id: 'sticker-31', file: 'images/white-sticker-31.png', name: 'White Sticker 31'},
  {id: 'sticker-32', file: 'images/white-sticker-32.png', name: 'White Sticker 32'},
  {id: 'sticker-33', file: 'images/white-sticker-33.png', name: 'White Sticker 33'},
  {id: 'sticker-34', file: 'images/white-sticker-34.png', name: 'White Sticker 34'},
  {id: 'sticker-35', file: 'images/white-sticker-35.png', name: 'White Sticker 35'},
  {id: 'sticker-36', file: 'images/white-sticker-36.png', name: 'White Sticker 36'},
  {id: 'sticker-37', file: 'images/white-sticker-37.png', name: 'White Sticker 37'},
  {id: 'sticker-38', file: 'images/white-sticker-38.png', name: 'White Sticker 38'},
  {id: 'sticker-39', file: 'images/white-sticker-39.png', name: 'White Sticker 39'},
  {id: 'sticker-40', file: 'images/white-sticker-40.png', name: 'White Sticker 40'},
  {id: 'sticker-41', file: 'images/white-sticker-41.png', name: 'White Sticker 41'},
  {id: 'sticker-42', file: 'images/white-sticker-42.png', name: 'White Sticker 42'},
  {id: 'sticker-43', file: 'images/white-sticker-43.png', name: 'White Sticker 43'},
  {id: 'sticker-44', file: 'images/white-sticker-44.png', name: 'White Sticker 44'},
  {id: 'sticker-45', file: 'images/white-sticker-45.png', name: 'White Sticker 45'},
  {id: 'sticker-46', file: 'images/white-sticker-46.png', name: 'White Sticker 46'},
  {id: 'sticker-47', file: 'images/white-sticker-47.png', name: 'White Sticker 47'},
  {id: 'sticker-48', file: 'images/white-sticker-48.png', name: 'White Sticker 48'},
  {id: 'sticker-49', file: 'images/white-sticker-49.png', name: 'White Sticker 49'},
  {id: 'sticker-50', file: 'images/white-sticker-50.png', name: 'White Sticker 50'},
];


// DOM refs
const grid = document.getElementById('grid');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const overlay = document.getElementById('overlay');
const cartItemsEl = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const checkoutWa = document.getElementById('checkout-whatsapp');
const copyCartBtn = document.getElementById('copy-cart');
const browseBtn = document.getElementById('browse-btn');

// cart state
const cart = {
  items: [],
  add(id, name) {
    const found = this.items.find(i=>i.id===id);
    if(found){ found.qty += 1; } else { this.items.push({id,name,qty:1}); }
    updateCartUI();
  },
  remove(id){
    this.items = this.items.filter(i=>i.id!==id);
    updateCartUI();
  },
  changeQty(id, delta){
    const found = this.items.find(i=>i.id===id);
    if(!found) return;
    found.qty += delta;
    if(found.qty < 1) this.remove(id);
    updateCartUI();
  },
  subtotal(){
    let total = 0;
    this.items.forEach(i=> total += i.qty * PRICE_PER);
    return total;
  },
  summaryText(){
    if(this.items.length===0) return 'Cart is empty';
    let lines = ['Hi I\'d like to order from Wonder Stickers:'];
    this.items.forEach(i=> lines.push('- ' + i.name + ' x' + i.qty));
    lines.push('Total: ₹' + this.subtotal() + ' (₹' + PRICE_PER + ' per sticker)');
    return lines.join('\n');
  }
};

// populate grid from IMAGE_LIST
function populateGrid(){
  grid.innerHTML = '';
  IMAGE_LIST.forEach((it) => {

    const OLD_PRICE = 12;
    const NEW_PRICE = PRICE_PER; // 9

    const card = document.createElement('div');
    card.className = 'sticker-card';

    const thumb = document.createElement('img');
    thumb.className = 'sticker-thumb';
    thumb.src = it.file;
    thumb.alt = it.name;
    thumb.style.width = '100%';
    thumb.style.height = '92px';
    thumb.style.objectFit = 'cover';
    thumb.style.borderRadius = '10px';

    // LABEL
    const label = document.createElement('div');
    label.className = 'sticker-label';
    label.textContent = it.name;

    // PRICE ROW (old + new)
    const priceRow = document.createElement('div');
    priceRow.className = 'price-row';
    priceRow.innerHTML = `
      <span class="old-price">₹${OLD_PRICE}</span>
      <span class="new-price">₹${NEW_PRICE}</span>
    `;

    // ADD BUTTON
    const addBtn = document.createElement('button');
    addBtn.className = 'btn outline';
    addBtn.textContent = 'Add to cart';
    addBtn.addEventListener('click', ()=> {
      cart.add(it.id, it.name);
      addBtn.textContent = 'Added ✓';
      setTimeout(()=> addBtn.textContent = 'Add to cart',900);
    });

    // APPEND ITEMS
    card.appendChild(thumb);
    card.appendChild(label);
    card.appendChild(priceRow);
    card.appendChild(addBtn);
    grid.appendChild(card);
  });
}


// cart UI update
function updateCartUI(){
  const totalCount = cart.items.reduce((s,i)=> s + i.qty, 0);
  cartCount.textContent = totalCount;
  cartItemsEl.innerHTML = '';
  if(cart.items.length === 0){
    cartItemsEl.innerHTML = '<p style="color:var(--muted);padding:6px">Your cart is empty.</p>';
  } else {
    cart.items.forEach(it => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      const thumb = document.createElement('img');
      thumb.className = 'cart-thumb';
      thumb.src = IMAGE_LIST.find(x=>x.id===it.id).file;
      thumb.alt = it.name;
      thumb.style.width = '56px';
      thumb.style.height = '56px';
      thumb.style.objectFit = 'cover';
      const name = document.createElement('div');
      name.className = 'cart-name';
      name.textContent = it.name;
      const qtyc = document.createElement('div');
      qtyc.className = 'qty-controls';
      const minus = document.createElement('button');
      minus.textContent = '-'; minus.addEventListener('click', ()=> cart.changeQty(it.id, -1));
      const qspan = document.createElement('span'); qspan.textContent = it.qty;
      const plus = document.createElement('button');
      plus.textContent = '+'; plus.addEventListener('click', ()=> cart.changeQty(it.id, +1));
      const remove = document.createElement('button');
      remove.textContent = '🗑'; remove.addEventListener('click', ()=> cart.remove(it.id));
      qtyc.appendChild(minus); qtyc.appendChild(qspan); qtyc.appendChild(plus); qtyc.appendChild(remove);
      row.appendChild(thumb); row.appendChild(name); row.appendChild(qtyc);
      cartItemsEl.appendChild(row);
    });
  }
  subtotalEl.textContent = '₹' + cart.subtotal();
  const message = cart.summaryText();
  checkoutWa.href = 'https://wa.me/9220732618?text=' + encodeURIComponent(message);
}

// drawer open/close
function openDrawer(){ cartDrawer.classList.add('open'); overlay.classList.add('show'); cartDrawer.setAttribute('aria-hidden','false'); }
function closeDrawer(){ cartDrawer.classList.remove('open'); overlay.classList.remove('show'); cartDrawer.setAttribute('aria-hidden','true'); }

cartBtn.addEventListener('click', ()=> openDrawer());
document.getElementById('close-cart').addEventListener('click', ()=> closeDrawer());
overlay.addEventListener('click', ()=> closeDrawer());

copyCartBtn.addEventListener('click', ()=> {
  const text = cart.summaryText();
  navigator.clipboard.writeText(text).then(()=> {
    copyCartBtn.textContent = 'Copied ✓';
    setTimeout(()=> copyCartBtn.textContent = 'Copy order text', 1000);
  }).catch(()=> {
    alert('Copy failed — please select and copy the text manually.');
  });
});

checkoutWa.addEventListener('click', (e)=> {
  if(cart.items.length === 0){
    e.preventDefault();
    alert('Your cart is empty. Add items first.');
    return;
  }
});

browseBtn.addEventListener('click', ()=> {
  document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
});

populateGrid();
