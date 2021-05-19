const cafeteriaForm = document.getElementById('cafeteria-form');
const cafeteriaId = document.getElementById('cafeteria-id');
const cafeteriaAddress = document.getElementById('cafeteria-address');

// Send POST to API to add cafeteria
async function addCafeteria(e) {
    e.preventDefault();
  
    if (cafeteriaId.value === '' || cafeteriaAddress.value === '') {
      alert('Please fill in fields');
    }
  
    const sendBody = {
      cafeteriaId: cafeteriaId.value,
      address: cafeteriaAddress.value
    };
  
    try {
      const res = await fetch('/api/v1/cafeterias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
      });
  
      if (res.status === 400) {
        throw Error('Cafeteria already exists!');
      }
  
      alert('Cafeteria added!');
      window.location.href = '/index.html';
    } catch (err) {
      alert(err);
      return;
    }
  }

cafeteriaForm.addEventListener('submit', addCafeteria);
