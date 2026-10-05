document.addEventListener('DOMContentLoaded', function () {
    var payOptions = document.querySelectorAll('[data-pay-option]');
    payOptions.forEach(function (option) {
        var radio = option.querySelector('input[type="radio"]');

        option.addEventListener('click', function () {
            radio.checked = true;
            payOptions.forEach(function (opt) {
                opt.classList.remove('pay-option--selected');
            });
            option.classList.add('pay-option--selected');
        });
    });
    var acceptPolicy = document.getElementById('acceptPolicy');
    var payNowBtn = document.getElementById('payNowBtn');

    if (acceptPolicy && payNowBtn) {
        acceptPolicy.addEventListener('change', function () {
            payNowBtn.disabled = !acceptPolicy.checked;
        });
    }
});