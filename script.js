// Translation object
const translations = {
    en: {
        'choose-language': 'Choose Your Language',
        'choose-language-subtitle': 'Select your preferred language',
        'invitation-text': 'DEAR GUEST',
        'invitation-subtext': 'We joyfully invite you to the celebration of our wedding, join us for love, laughter, and happily ever after',
        'date-day': 'Tuesday',
        'date-month': 'November',
        'date-time': '5:30 PM',
        'date-year': '2025',
        'location-title': 'Address',
        'venue-name': 'Olmos Celebration Palace',
        'venue-address': 'Termiz City',
        'view-location': 'View Location',
        'travel-arrangements': 'Travel Arrangements',
        'train-tickets': 'Train Tickets',
        'train-description': 'Reserve your train tickets',
        'train-warning': '⚠️ Please choose Toshkent - Termiz direction and date before November 18',
        'train-booking-title': 'Train Ticket Booking',
        'train-booking-warning-modal': 'Please make sure to select:<br><strong>Toshkent - Termiz</strong> direction<br>and choose a date <strong>before November 18</strong>',
        'cancel': 'Cancel',
        'process': 'Process',
        'flight-tickets': 'Flight Tickets',
        'flight-description': 'Reserve your flight',
        'book-now': 'Book Now',
        'organizers-sincerely': 'Sincerely',
        'organizers-name': 'Jaxongir Mirzayev'
    },
    ru: {
        'choose-language': 'Выберите язык',
        'choose-language-subtitle': 'Выберите предпочитаемый язык',
        'invitation-text': 'ДОРОГОЙ ГОСТЬ',
        'invitation-subtext': 'С радостью приглашаем вас отпраздновать нашу свадьбу, присоединяйтесь к нам, чтобы разделить любовь, радость и начало нашей счастливой истории.',
        'date-day': 'Вторник',
        'date-month': 'Ноябрь',
        'date-time': '17:30',
        'date-year': '2025',
        'location-title': 'Адрес',
        'venue-name': 'Дворец празднования Olmos',
        'venue-address': 'Город Термез',
        'view-location': 'Посмотреть на карте',
        'travel-arrangements': 'Транспорт',
        'train-tickets': 'Железнодорожные билеты',
        'train-description': 'Забронируйте билеты на поезд',
        'train-warning': '⚠️ Пожалуйста, выберите направление Tошкент - Термиз и дату до 18 ноября',
        'train-booking-title': 'Бронирование билетов на поезд',
        'train-booking-warning-modal': 'Пожалуйста, убедитесь, что выбрали:<br><strong>Tошкент - Термиз</strong> направление<br>и дату <strong>до 18 ноября</strong>',
        'cancel': 'Отмена',
        'process': 'Продолжить',
        'flight-tickets': 'Авиабилеты',
        'flight-description': 'Забронируйте авиабилеты',
        'book-now': 'Забронировать',
        'organizers-sincerely': 'С уважением',
        'organizers-name': 'Жахонгир Мирзаев'
    },
    uz: {
        'choose-language': 'Tilni tanlang',
        'choose-language-subtitle': 'Qulay tilni tanlang',
        'invitation-text': 'AZIZ MEHMONIMIZ',
        'invitation-subtext': 'Yuragimizdagi cheksiz quvonch ila sizni bizning nikoh tantanamizga taklif etamiz',
        'date-day': 'Seshanba',
        'date-month': 'Noyabr',
        'date-time': '17:30',
        'date-year': '2025',
        'location-title': 'Manzil',
        'venue-name': 'Olmos tantanalar saroyi',
        'venue-address': 'Termiz shahri',
        'view-location': 'Joylashuvni ko\'rish',
        'travel-arrangements': 'Transport',
        'train-tickets': 'Poyezd chiptalari',
        'train-description': 'Poyezd chiptalarini bron qiling',
        'train-warning': '⚠️ Iltimos, Toshkent - Termiz yo\'nalishini va 18 noyabrdan oldingi sanani tanlang',
        'train-booking-title': 'Poyezd chiptalarini bron qilish',
        'train-booking-warning-modal': 'Iltimos, tanlaganingizga ishonch hosil qiling:<br><strong>Toshkent - Termiz</strong> yo\'nalishi<br>va sana <strong>18 noyabrdan oldin</strong>',
        'cancel': 'Bekor qilish',
        'process': 'Davom etish',
        'flight-tickets': 'Aviabiletlar',
        'flight-description': 'Aviabiletlarni bron qiling',
        'book-now': 'Bron qilish',
        'organizers-sincerely': 'Hurmat va ehtirom ila',
        'organizers-name': 'Jaxongir Mirzayevlar xonadoni'
    }
};

// Get saved language from localStorage (cache)
let currentLang = localStorage.getItem('wedding-language');

// Check if user has visited before
const hasVisited = localStorage.getItem('wedding-language-visited');

// Function to translate text
function translate(key) {
    // Use saved language or default to English
    const lang = currentLang || 'en';
    return translations[lang][key] || translations['en'][key] || key;
}

// Function to update all text on the page
function updateLanguage(lang) {
    currentLang = lang;
    // Save language choice to localStorage (cache) - persists across sessions
    localStorage.setItem('wedding-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        // Handle HTML content (like <br> tags)
        if (translation && translation.includes('<br>')) {
            element.innerHTML = translation;
        } else if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Show language modal on first visit
function checkFirstVisit() {
    // If user hasn't visited before and no language is saved, show modal
    if (!hasVisited && !currentLang) {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
        return true; // Modal is shown
    }
    return false; // Modal not shown
}

// Hide language modal and save visited flag to cache
function hideLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
        modal.classList.add('hidden');
        // Save visited flag to localStorage (cache) - prevents modal from showing again
        localStorage.setItem('wedding-language-visited', 'true');
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is first visit - modal will show if needed
    const modalShown = checkFirstVisit();
    
    // If language is saved in cache, use it immediately
    if (currentLang) {
        updateLanguage(currentLang);
    } else if (!modalShown) {
        // If no language saved and modal not shown (shouldn't happen), default to English
        updateLanguage('en');
    }
    // If modal is shown, don't set language yet - wait for user choice
    
    // Language modal buttons
    document.querySelectorAll('.language-option').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            // Save language choice to cache and update page
            updateLanguage(lang);
            // Hide modal and save visited flag
            hideLanguageModal();
        });
    });
    
    // Language switcher buttons (always visible at bottom)
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            // Save language choice to cache and update page
            updateLanguage(lang);
        });
    });
});

// Map functionality
const mapButton = document.getElementById('mapButton');

// Location link - UPDATE THIS WITH YOUR GOOGLE MAPS LINK
const locationLink = 'https://www.google.com/maps/place/Olmos+to%CA%BByxonasi/@37.2247432,67.2615724,15z/data=!4m6!3m5!1s0x3f352f0017228d13:0x6c6e4b0e0ab0bfa3!8m2!3d37.2254864!4d67.2601321!16s%2Fg%2F11wj6x80dv?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D';

// Function to redirect to location link
function redirectToLocation() {
    // Open the location link in a new tab
    window.open(locationLink, '_blank', 'noopener,noreferrer');
}

// Event listener for map button
if (mapButton) {
    mapButton.addEventListener('click', redirectToLocation);
}

// Train booking modal functionality
const trainBookingLink = document.getElementById('trainBookingLink');
const trainBookingModal = document.getElementById('trainBookingModal');
const trainBookingProcess = document.getElementById('trainBookingProcess');
const trainBookingClose = document.getElementById('trainBookingClose');

// Show train booking modal
function showTrainBookingModal(event) {
    event.preventDefault();
    trainBookingModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Hide train booking modal
function hideTrainBookingModal() {
    trainBookingModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Process button - open booking page
function processTrainBooking() {
    hideTrainBookingModal();
    const bookingUrl = 'https://eticket.railway.uz/uz/home';
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
}

// Event listeners
if (trainBookingLink) {
    trainBookingLink.addEventListener('click', showTrainBookingModal);
}

if (trainBookingProcess) {
    trainBookingProcess.addEventListener('click', processTrainBooking);
}

if (trainBookingClose) {
    trainBookingClose.addEventListener('click', hideTrainBookingModal);
}

// Close modal when clicking outside
if (trainBookingModal) {
    trainBookingModal.addEventListener('click', function(event) {
        if (event.target === trainBookingModal) {
            hideTrainBookingModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !trainBookingModal.classList.contains('hidden')) {
        hideTrainBookingModal();
    }
});

// Scroll Animation Functionality
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate, .scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Trigger when element is 150px from viewport
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Run animation check on scroll and on page load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initial check for elements already in viewport
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
        animateOnScroll();
    }, 100);
    
    // Clean up initial animations after they complete (prevents re-animation on scroll)
    setTimeout(() => {
        const initialElements = document.querySelectorAll('.initial-animate-bottom-text, .initial-animate-names, .initial-animate-date');
        initialElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }, 3500); // After all initial animations complete (3.5 seconds)
});
