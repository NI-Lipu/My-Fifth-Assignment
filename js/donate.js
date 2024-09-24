// Noakhali

document.getElementById('noakhali-donation-btn')
    .addEventListener('click', function(){

      const donation = getInputFieldValueById('input-noakhali-donation');
      const myBalance = getTextFieldValueById('my-balance');

      if(donation < 0 || myBalance < donation){
        alert('Failed to add money.')
        return;
      }
      
      const balance = getTextFieldValueById('donated-money-for-noakhali');
      const newBalance = balance + donation;
      document.getElementById('donated-money-for-noakhali').innerText = newBalance;

      const myNewBalance = myBalance - donation;
      document.getElementById('my-balance').innerText = myNewBalance;

      // Modal

      const modal = document.getElementById('modal-noakhali')
      modal.showModal();


      const historyItem = document.createElement('div');
      historyItem.className = 'p-8 mb-8 mx-4 lg:mx-28 rounded-lg border-2 border-gray-300';
      historyItem.innerHTML = `
          <p class='font-bold text-xl text-black'>${donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
          <p class='font-light text-gray-600 mt-3'>Date : ${new Date().toString()}</p>
      `
      const historyContainer = document.getElementById('history-container');
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    })

    // Feni

document.getElementById('feni-donation-btn')
    .addEventListener('click', function(){

      const donation = getInputFieldValueById('input-feni-donation');
      const myBalance = getTextFieldValueById('my-balance');

      if(donation < 0 || myBalance < donation){
        alert('Failed to add money.')
        return;
      }
      
      const balance = getTextFieldValueById('donated-money-for-feni');
      const newBalance = balance + donation;
      document.getElementById('donated-money-for-feni').innerText = newBalance;

      const myNewBalance = myBalance - donation;
      document.getElementById('my-balance').innerText = myNewBalance;


       // Modal

      const modal = document.getElementById('modal-feni')
      modal.showModal();     

      const historyItem = document.createElement('div');
      historyItem.className = 'p-8 mb-8 mx-4 lg:mx-28 rounded-lg border-2 border-gray-300';
      historyItem.innerHTML = `
          <p class='font-bold text-xl text-black'>${donation} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
          <p class='font-light text-gray-600 mt-3'>Date : ${new Date().toString()}</p>
      `
      const historyContainer = document.getElementById('history-container');
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
      
    })

    // Quota Movement

document.getElementById('quota-movement-donation-btn')
    .addEventListener('click', function(){

      const donation = getInputFieldValueById('input-quota-movement-donation');
      const myBalance = getTextFieldValueById('my-balance');

      if(donation < 0 || myBalance < donation){
        alert('Failed to add money.')
        return;
      }
      
      const balance = getTextFieldValueById('donated-money-for-quota-movement');
      const newBalance = balance + donation;
      document.getElementById('donated-money-for-quota-movement').innerText = newBalance;

      const myNewBalance = myBalance - donation;
      document.getElementById('my-balance').innerText = myNewBalance;

      // Modal

      const modal = document.getElementById('modal-quota-movement')
      modal.showModal();

      const historyItem = document.createElement('div');
      historyItem.className = 'p-8 mb-8 mx-4 lg:mx-28 rounded-lg border-2 border-gray-300';
      historyItem.innerHTML = `
          <p class='font-bold text-xl text-black'>${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
          <p class='font-light text-gray-600 mt-3'>Date : ${new Date().toString()}</p>
      `
      const historyContainer = document.getElementById('history-container');
      historyContainer.insertBefore(historyItem, historyContainer.firstChild);
      
      
    })


    // Toggle 

    document.getElementById('btn-history')
        .addEventListener('click', function(){
          document.getElementById('btn-history').classList.add('font-semibold', 'bg-primary', 'text-black');
          document.getElementById('btn-donation').classList.remove('font-semibold', 'bg-primary', 'text-black');
          document.getElementById('btn-donation').classList.add('font-medium', 'border-2', 'bg-[#f3f3f3]', 'border-gray-200', 'text-[#575655]');

          document.getElementById('main-section').classList.add('hidden');

          document.getElementById('history-container').classList.remove('hidden')
        })
    document.getElementById('btn-donation')
        .addEventListener('click', function(){
          document.getElementById('btn-history').classList.remove('font-semibold', 'bg-primary', 'text-black');
          document.getElementById('btn-donation').classList.add('font-semibold', 'bg-primary', 'text-black');

          document.getElementById('main-section').classList.remove('hidden');

          document.getElementById('history-container').classList.add('hidden')
        })

        // Go to Blog Page

        // these event is not working in this js file.So I Write these in script tag in the html file.

        // document.getElementById('btn-blog')
        //     .addEventListener('click', function(){
        //       window.location.href = 'blog.html';
        //     })
        // document.getElementById('btn-home')
        //     .addEventListener('click', function(){
        //       window.location.href = 'index.html';
        //     })



