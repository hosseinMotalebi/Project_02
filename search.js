// Counter buttons
function stepCounter(id, delta) {
    const el = document.getElementById(id);
    let val = parseInt(el.textContent, 10) + delta;
    if (val < 0) val = 0;
    el.textContent = val;
}

// Filter chevrons: flip based on collapse state
document.querySelectorAll('.filter-toggle').forEach(function (toggle) {
    const targetSel = toggle.getAttribute('data-bs-target');
    const target = document.querySelector(targetSel);
    target.addEventListener('shown.bs.collapse', function () { toggle.setAttribute('aria-expanded', 'true'); });
    target.addEventListener('hidden.bs.collapse', function () { toggle.setAttribute('aria-expanded', 'false'); });
});

// Tour data
const tourssearch = [
    {
        img: "https://cdn.imgurl.ir/uploads/z664506_6f49fc622c7a85f6eb7808dd17f4094fe8650d68_1.jpg",
        title: "Italy in 21 days",
        tag: { type: "family", text: "Family Friendly" },
        dates: "Jan 5, 2025 &nbsp;|&nbsp; April 24, 2025 &nbsp;<span class='more'>+3 more</span>",
        amenities: ["Hotel", "Flight", "Transfer", "Meal"],
        badge: { type: "orange", icon: "bi-clock-history", text: "Only 6 left" },
        rating: "4.6", reviews: "45",
        hotel: "5 Star Hotel", place: "Artemide", duration: "20 Nights and 21 Days",
        price: "€7,500.00", fav: true
    },
    {
        img: "https://cdn.imgurl.ir/uploads/h20365_photo29507461559.jpg",
        title: "Santorini",
        tag: { type: "adult", text: "Adult Only" },
        dates: "Jan 5, 2025 &nbsp;|&nbsp; Aug 24, 2025 &nbsp;<span class='more'>+3 more</span>",
        amenities: ["Hotel", "Flight", "Transfer", "Meal"],
        badge: null,
        rating: "4.8", reviews: "380",
        hotel: "5 Star Hotel", place: "Sheraton", duration: "5 Nights and 4 Days",
        price: "€1,250.00", fav: false
    },
    {
        img: "https://cdn.imgurl.ir/uploads/k269532_bb1ece40254694161b3cb4a9b830c8a3fe3cd789_2.jpg",
        title: "Spain",
        tag: null,
        dates: "Jan 5, 2025 &nbsp;|&nbsp; Aug 24, 2025 &nbsp;<span class='more'>+3 more</span>",
        amenities: ["Hotel", "Flight", "Transfer", "Meal"],
        // badge: { type: "blue", icon: null, text: "15 Left" },
        rating: "4.6", reviews: "45",
        hotel: "4 Star Hotel", place: "Aqua Luxury suits", duration: "6 Nights and 7 Days",
        price: "€7,500.00", fav: false
    },
    {
        img: "https://cdn.imgurl.ir/uploads/n214807_c12f428899f55724340d08fe471b1170e9910af5.jpg",
        title: "Prague",
        tag: { type: "adult", text: "Adult Only" },
        dates: "Jan 5, 2025 &nbsp;|&nbsp; Aug 24, 2025 &nbsp;<span class='more'>+3 more</span>",
        amenities: ["Hotel", "Flight", "Transfer", "Meal"],
        badge: { type: "orange", icon: "bi-clock-history", text: "Only 2 left" },
        rating: "4.6", reviews: "45",
        hotel: "4 Star Hotel", place: "Aqua Luxury suits", duration: "6 Nights and 7 Days",
        price: "€7,500.00", fav: false
    },
    {
        img: "https://cdn.imgurl.ir/uploads/s620782_8dcd1baf769f6b4625164b3ffd7ed03f6dffb4cb.jpg",
        title: "London",
        tag: null,
        dates: "Jan 5, 2025 &nbsp;|&nbsp; Aug 24, 2025 &nbsp;<span class='more'>+3 more</span>",
        amenities: ["Hotel", "Flight", "Transfer"],
        badge: null,
        rating: "4.6", reviews: "45",
        hotel: "4 Star Hotel", place: "Aqua Luxury Suits", duration: "6 Nights and 7 Days",
        price: "€7,500.00", fav: false
    },
    {
        img: "https://cdn.imgurl.ir/uploads/q503238_31f8bf57c782723993574b83e392d6013fabd981.jpg",
        title: "Austria",
        tag: { type: "family", text: "Family Friendly" },
        dates: "Jan 5, 2025 &nbsp;|&nbsp; Aug 24, 2025 &nbsp;<span class='more'>+3 more</span>",
        amenities: ["Hotel", "Flight", "Meal"],
        badge: null,
        rating: "4.6", reviews: "45",
        hotel: "4 Star Hotel", place: "Aqua Luxury suits", duration: "6 Nights and 7 Days",
        price: "€7,500.00", fav: false
    }
];

const amenityIcons = {
    Hotel: "bi-building",
    Flight: "bi-airplane",
    Transfer: "bi-arrow-left-right",
    Meal: "bi-cup-hot"
};

const list = document.getElementById('toursList');
tourssearch.forEach(function (t) {
    const tagHtml = t.tag ? `<span class="tag-pill ${t.tag.type}"><i class="bi bi-people-fill"></i> ${t.tag.text}</span><br>` : "";
    const badgeHtml = t.badge
        ? `<span class="availability-badge ${t.badge.type === 'blue' ? 'blue' : ''}">${t.badge.icon ? `<i class="bi ${t.badge.icon}"></i>` : ""} ${t.badge.text}</span>`
        : "";
    const amenitiesHtml = t.amenities.map(a => `<span class="amenity-pill"><i class="bi ${amenityIcons[a]}"></i>${a}</span>`).join("");

    const card = document.createElement('div');
    card.className = "tour-card";
    card.innerHTML = `
      <div class="tour-img-wrap">
        <img src="${t.img}" alt="${t.title}">
        <button class="fav-btn ${t.fav ? 'active' : ''}"><i class="bi ${t.fav ? 'bi-heart-fill' : 'bi-heart'}"></i></button>
        ${badgeHtml}
      </div>
      <div class="tour-body">
        <div class="tour-top">
          <div>
            ${tagHtml}
            <div class="tour-title">${t.title}</div>
          </div>
        </div>
        <div class="avail-dates-label">Available Departure Dates</div>
        <div class="dates-row">${t.dates}</div>
        <div class="amenities">${amenitiesHtml}</div>
        <div class="tour-meta">
          <div class="meta-item rating-pill"><i class="bi bi-star-fill"></i> <strong>${t.rating}</strong> (${t.reviews} Reviews)</div>
          <div class="meta-item"><i class="bi bi-building"></i> ${t.hotel}</div>
          <div class="meta-item"><i class="bi bi-geo-alt"></i> ${t.place}</div>
          <div class="meta-item"><i class="bi bi-clock"></i> ${t.duration}</div>
          <div class="price-block">
            <div class="from-label">From</div>
            <div class="price">${t.price}</div>
          </div>
        </div>
      </div>
    `;
    list.appendChild(card);
});