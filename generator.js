let previousPassword = '';
// Genarator ts
document.getElementById('generate').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var useUppercase = document.getElementById('uppercase').checked;
    var useLowercase = document.getElementById('lowercase').checked;
    var useNumbers = document.getElementById('numbers').checked;
    var useSpecial = document.getElementById('special').checked;

    var charset = '';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSpecial) charset += '!@#$%^&*()_+';

    var passwordField = document.getElementById('password');

    let newPassword = '';

    if (charset === '') {
        passwordField.value = 'Select at least one character type.';
    } else {
        do {
            newPassword = generatePassword(length, charset);
        } while (newPassword === previousPassword);

        passwordField.value = newPassword;
        previousPassword = newPassword;
    }
});

document.getElementById('copy').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.value !== 'Select at least one character type.') {
        passwordField.select();
        document.execCommand('copy');
    }
});

function generatePassword(length, charset) {
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
