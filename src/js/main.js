import "./lib/lib";

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Dynamic modal',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus magnam ipsum illum perspiciatis culpa neque delectus tenetur commodi, porro aliquam libero minima possimus illo nostrum in accusantium itaque iste!'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Another button',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('New button')
        }
      ]
    ]
  }
}));