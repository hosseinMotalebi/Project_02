const cities = ["London", "Paris", "Istanbul", "Dubai", "Tokyo", "New York", "Berlin", "Rome", "Barcelona", "Amsterdam"];
const destinations = ["Paris", "Istanbul", "Dubai", "Tokyo", "New York", "London", "Berlin", "Rome", "Barcelona", "Amsterdam", "Bali", "Maldives", "Bangkok", "Sydney", "Europe"];
const tours = [
    { id: 1, title: "Italy in 21 days", from: "London", destination: "Rome", image: "https://cdn.imgurl.ir/uploads/e50258_card1.jpg", badge: "Family Friendly", badgeType: "family", urgency: "Only 6 left", dates: ["2025-01-05", "2025-04-24", "2025-06-10", "2025-08-15", "2025-10-01"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.6, reviews: 45, hotelStars: 5, duration: "20 Nights and 21 Days", price: 7500, currency: "€" },
    { id: 2, title: "Santorini", from: "Paris", destination: "Rome", image: "https://cdn.imgurl.ir/uploads/k784118_ec4be7762a2aeb79726ab4fb004e7e610e0af134.jpg", badge: "Adult Only", badgeType: "adult", urgency: "", dates: ["2025-01-05", "2025-08-24", "2025-09-10", "2025-10-05", "2025-11-20"], amenities: ["Hotel", "Flight", "Transfer"], rating: 4.8, reviews: 380, hotelStars: 5, duration: "5 Nights and 4 Days", price: 1250, currency: "€" },
    { id: 3, title: "Spain", from: "London", destination: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "Only 3 left", dates: ["2025-03-01", "2025-05-15", "2025-07-20"], amenities: ["Hotel", "Flight", "Meal"], rating: 4.5, reviews: 210, hotelStars: 4, duration: "4 Nights and 5 Days", price: 980, currency: "€" },
    { id: 4, title: "Istanbul Explorer", from: "Berlin", destination: "Istanbul", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=400&q=80", badge: "Cultural", badgeType: "family", urgency: "", dates: ["2025-02-10", "2025-04-05", "2025-06-20", "2025-09-15"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.7, reviews: 320, hotelStars: 5, duration: "7 Nights and 8 Days", price: 1850, currency: "€" },
    { id: 5, title: "Dubai Luxury", from: "London", destination: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80", badge: "Adult Only", badgeType: "adult", urgency: "Only 2 left", dates: ["2025-01-15", "2025-03-20", "2025-11-10"], amenities: ["Hotel", "Flight", "Transfer"], rating: 4.9, reviews: 510, hotelStars: 5, duration: "6 Nights and 7 Days", price: 3200, currency: "€" },
    { id: 6, title: "Tokyo Adventure", from: "Paris", destination: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "", dates: ["2025-04-01", "2025-06-15", "2025-09-01", "2025-11-20"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.7, reviews: 280, hotelStars: 4, duration: "10 Nights and 11 Days", price: 4500, currency: "€" },
    { id: 7, title: "Barcelona Beach", from: "London", destination: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=400&q=80", badge: "Adult Only", badgeType: "adult", urgency: "Only 5 left", dates: ["2025-05-10", "2025-07-01", "2025-08-15"], amenities: ["Hotel", "Flight"], rating: 4.4, reviews: 190, hotelStars: 4, duration: "5 Nights and 6 Days", price: 1100, currency: "€" },
    { id: 8, title: "Amsterdam Canals", from: "Berlin", destination: "Amsterdam", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=400&q=80", badge: "Cultural", badgeType: "family", urgency: "", dates: ["2025-03-15", "2025-06-01", "2025-09-20", "2025-12-10"], amenities: ["Hotel", "Flight", "Transfer"], rating: 4.3, reviews: 150, hotelStars: 3, duration: "3 Nights and 4 Days", price: 750, currency: "€" },
    { id: 9, title: "Maldives Paradise", from: "Dubai", destination: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80", badge: "Adult Only", badgeType: "adult", urgency: "Only 1 left", dates: ["2025-01-20", "2025-04-10", "2025-12-01"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.9, reviews: 620, hotelStars: 5, duration: "7 Nights and 8 Days", price: 5800, currency: "€" },
    { id: 10, title: "Bangkok Explorer", from: "Tokyo", destination: "Bangkok", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "", dates: ["2025-02-01", "2025-05-20", "2025-08-10", "2025-11-05"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.5, reviews: 230, hotelStars: 4, duration: "8 Nights and 9 Days", price: 2100, currency: "€" },
    { id: 11, title: "New York City", from: "London", destination: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "Only 4 left", dates: ["2025-03-10", "2025-06-25", "2025-09-15"], amenities: ["Hotel", "Flight", "Transfer"], rating: 4.6, reviews: 420, hotelStars: 4, duration: "6 Nights and 7 Days", price: 3500, currency: "€" },
    { id: 12, title: "Bali Retreat", from: "Tokyo", destination: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80", badge: "Adult Only", badgeType: "adult", urgency: "", dates: ["2025-04-05", "2025-07-20", "2025-10-10"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.8, reviews: 350, hotelStars: 5, duration: "9 Nights and 10 Days", price: 3800, currency: "€" },
    { id: 13, title: "Berlin City Break", from: "Amsterdam", destination: "Berlin", image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=80", badge: "Cultural", badgeType: "family", urgency: "", dates: ["2025-02-15", "2025-05-01", "2025-08-20", "2025-11-15"], amenities: ["Hotel", "Flight"], rating: 4.2, reviews: 110, hotelStars: 3, duration: "3 Nights and 4 Days", price: 620, currency: "€" },
    { id: 14, title: "Sydney Discovery", from: "Tokyo", destination: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "Only 3 left", dates: ["2025-03-01", "2025-06-10", "2025-09-25"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.7, reviews: 290, hotelStars: 4, duration: "12 Nights and 13 Days", price: 5200, currency: "€" },
    { id: 15, title: "Paris Romance", from: "New York", destination: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", badge: "Adult Only", badgeType: "adult", urgency: "", dates: ["2025-02-14", "2025-05-20", "2025-09-01"], amenities: ["Hotel", "Flight", "Transfer"], rating: 4.8, reviews: 440, hotelStars: 5, duration: "5 Nights and 6 Days", price: 2800, currency: "€" },
    { id: 16, title: "Istanbul & Cappadocia", from: "London", destination: "Istanbul", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80", badge: "Cultural", badgeType: "family", urgency: "Only 7 left", dates: ["2025-04-15", "2025-06-30", "2025-09-10", "2025-11-01"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.9, reviews: 560, hotelStars: 5, duration: "10 Nights and 11 Days", price: 3400, currency: "€" },
    { id: 17, title: "Dubai Desert Safari", from: "Istanbul", destination: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "", dates: ["2025-01-10", "2025-04-20", "2025-07-15", "2025-10-30"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.6, reviews: 280, hotelStars: 4, duration: "5 Nights and 6 Days", price: 2200, currency: "€" },
    { id: 18, title: "Rome Historical", from: "Barcelona", destination: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80", badge: "Cultural", badgeType: "family", urgency: "", dates: ["2025-03-20", "2025-06-05", "2025-08-25"], amenities: ["Hotel", "Flight", "Transfer"], rating: 4.5, reviews: 175, hotelStars: 4, duration: "6 Nights and 7 Days", price: 1650, currency: "€" },
    { id: 19, title: "Tokyo & Kyoto", from: "New York", destination: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "Only 8 left", dates: ["2025-04-10", "2025-07-01", "2025-10-15"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.8, reviews: 390, hotelStars: 5, duration: "14 Nights and 15 Days", price: 6200, currency: "€" },
    { id: 20, title: "Barcelona & Madrid", from: "Paris", destination: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=400&q=80", badge: "Family Friendly", badgeType: "family", urgency: "", dates: ["2025-03-05", "2025-05-25", "2025-08-10", "2025-11-01"], amenities: ["Hotel", "Flight", "Transfer", "Meal"], rating: 4.4, reviews: 200, hotelStars: 4, duration: "8 Nights and 9 Days", price: 2400, currency: "€" }
];

const fromSelect = document.getElementById('from-select');
const destSelect = document.getElementById('dest-select');

cities.forEach(city => {
    const opt = document.createElement('option');
    opt.value = city;
    opt.textContent = city;
    fromSelect.appendChild(opt);
});

destinations.forEach(dest => {
    const opt = document.createElement('option');
    opt.value = dest;
    opt.textContent = dest;
    destSelect.appendChild(opt);
});

const amenityIcons = { Hotel: 'fa-solid fa-hotel', Flight: 'fa-solid fa-plane', Transfer: 'fa-solid fa-bus', Meal: 'fa-solid fa-utensils' };

function renderTours(list) {
    const container = document.getElementById('cards-list');
    const header = document.getElementById('tour-count');

    header.textContent = list.length + ' tours found';

    if (list.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#6b7280;font-size:16px;">No tours found matching your criteria.</div>';
        return;
    }
    container.innerHTML = list.map(tour => {
        const badgeClass = tour.badgeType === 'adult' ? 'badge-adult' : 'badge-family';
        const urgencyHtml = tour.urgency ? '<span class="urgency-badge">' + tour.urgency + '</span>' : '';
        const datesHtml = tour.dates.slice(0, 2).join(' &nbsp;|&nbsp; ') + (tour.dates.length > 2 ? ' <span>+' + (tour.dates.length - 2) + ' more</span>' : '');
        const amenitiesHtml = tour.amenities.map(a => '<div class="amenity-pill"><i class="' + amenityIcons[a] + '"></i> ' + a + '</div>').join('');
        const starsHtml = '<i class="fa-solid fa-star"></i>'.repeat(tour.hotelStars);

        return '<div class="tour-card">' +
            '<div class="card-image-box">' +
            '<img src="' + tour.image + '" alt="' + tour.title + '">' +
            '<button class="fav-btn"><i class="fa-solid fa-heart"></i></button>' +
            '</div>' +
            '<div class="card-content">' +
            '<div>' +
            '<div class="card-top">' +
            '<div>' +
            '<h3 class="tour-title">' + tour.title + '</h3>' +
            '<span class="badge ' + badgeClass + '">' + tour.badge + '</span>' +
            '</div>' +
            urgencyHtml +
            '</div>' +
            '<div class="date-section">' +
            '<p class="date-label">Available Departure Dates</p>' +
            '<p class="dates">' + datesHtml + '</p>' +
            '</div>' +
            '<div class="amenities">' + amenitiesHtml + '</div>' +
            '</div>' +
            '<div class="card-footer">' +
            '<div class="footer-left">' +
            '<div class="footer-item rating"><i class="fa-solid fa-star"></i> <strong>' + tour.rating + '</strong> <span>(' + tour.reviews + ' Reviews)</span></div>' +
            '<div class="footer-item"><i class="fa-solid fa-hotel" style="color:#9ca3af;"></i> <span>' + tour.hotelStars + ' Star Hotel</span></div>' +
            '<div class="footer-item"><i class="fa-solid fa-clock" style="color:#9ca3af;"></i> <span>' + tour.duration + '</span></div>' +
            '</div>' +
            '<div class="price-section"><span>From</span><h4>' + tour.currency + tour.price.toLocaleString() + '.00</h4></div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}
function handleSearch() {
    const from = document.getElementById('from-select').value;
    const dest = document.getElementById('dest-select').value;
    const dateVal = document.getElementById('date-input').value;

    if (!from && !dest && !dateVal) {
        renderTours(tours);
        return;
    }

    const filtered = tours.filter(tour => {
        if (from && tour.from !== from) return false;
        if (dest && tour.destination !== dest) return false;
        if (dateVal) {
            const hasMatch = tour.dates.some(d => d >= dateVal);
            if (!hasMatch) return false;
        }
        return true;
    });
    renderTours(filtered);
}
renderTours(tours);
function toggleAcc(header) {
    const item = header.closest('[data-acc]');
    document.querySelectorAll('[data-acc]').forEach(el => {
        if (el !== item) el.classList.remove('show');
    });
    item.classList.toggle('show');
}

document.querySelectorAll('.price-row[data-target]').forEach(function (row) {
    row.addEventListener('click', function () {
        var detail = document.getElementById(row.dataset.target);
        var isOpen = row.classList.contains('open');
        document.querySelectorAll('.price-row.open').forEach(function (openRow) {
            if (openRow !== row) {
                openRow.classList.remove('open');
                document.getElementById(openRow.dataset.target).style.maxHeight = null;
            }
        });

        if (isOpen) {
            row.classList.remove('open');
            detail.style.maxHeight = null;
        } else {
            row.classList.add('open');
            detail.style.maxHeight = detail.scrollHeight + 'px';
        }
    });
});

document.getElementById('bookBtn').addEventListener('click', function () {
    this.textContent = 'Booked ✓';
    this.style.background = '#2e7d32';
    this.style.boxShadow = '0 8px 18px rgba(46,125,50,.35)';
});

let btnLogin = document.querySelector(".btnlogin")
let login = document.querySelector(".login")

btnLogin.addEventListener("click", function () {
    login.style.display = "block"
})