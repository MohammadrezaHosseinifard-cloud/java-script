function updateProfile() {
  const profileName = document.getElementById('profileName');
  const instagramHandle = document.getElementById('instagramHandle');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  // Update the values below with the actual details
  profileName.textContent = 'John Doe';
  instagramHandle.textContent = '@john_doe';
  email.textContent = 'john.doe@example.com';
  phone.textContent = '+9876543210';
}