function togglePasswordVisibility() {
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            const passwordToggle = document.getElementById('passwordToggle');
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            confirmPasswordInput.type = type;
            passwordToggle.classList.toggle('ri-eye-off-line');
        }

        function checkPasswordStrength() {
            const password = document.getElementById('password').value;
            const strengthBar = document.getElementById('passwordStrength');
            let strength = 0;

            if (password.length > 7) strength += 1;
            if (/[A-Z]/.test(password)) strength += 1;
            if (/[a-z]/.test(password)) strength += 1;
            if (/\d/.test(password)) strength += 1;
            if (/[\W_]/.test(password)) strength += 1;

            if (password.length > 0) {
                strengthBar.style.display = 'block';
                strengthBar.style.width = `${strength * 20}%`;
                strengthBar.className = `password-strength ${strength >= 4 ? 'bg-green-500' : strength >= 3 ? 'bg-yellow-500' : 'bg-red-500'}`;
            } else {
                strengthBar.style.display = 'none';
            }
        }

        function validatePasswords() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const passwordError = document.getElementById('passwordError');
            if (password !== confirmPassword) {
                passwordError.style.display = 'block';
            } else {
                passwordError.style.display = 'none';
            }
        }

        function toggleEmailPhone() {
            const emailSection = document.getElementById('emailSection');
            const phoneSection = document.getElementById('phoneSection');
            const isPhone = document.getElementById('phoneToggle').checked;

            emailSection.style.display = isPhone ? 'none' : 'block';
            phoneSection.style.display = isPhone ? 'block' : 'none';
        }