document.querySelector('#dark-mode-checkbox').addEventListener('change' , function() {
  const rootStyle = document.querySelector(':root').style;

  if(this.checked) {
    rootStyle.setProperty('--background', 'hsl(230, 17%, 14%)');
    rootStyle.setProperty('--background-header', 'hsl(232, 19%, 15%)');
    rootStyle.setProperty('--background-card', 'hsl(228, 28%, 20%)');
    rootStyle.setProperty('--background-card-hover', 'hsl(229, 26%, 30%)');
    rootStyle.setProperty('--main-color-text', 'hsl(0, 0%, 100%)');
    rootStyle.setProperty('--secondary-color-text', 'hsl(228, 34%, 66%)');
    rootStyle.setProperty('--secondary-color-title', 'hsl(0, 0%, 100%)');
  } else {
    rootStyle.setProperty('--background', 'hsl(0, 0%, 100%)');
    rootStyle.setProperty('--background-header', 'hsl(225, 100%, 98%)');
    rootStyle.setProperty('--background-card', 'hsl(227, 47%, 96%)');
    rootStyle.setProperty('--background-card-hover', 'hsl(224, 27%, 92%)');
    rootStyle.setProperty('--main-color-text', 'hsl(230, 17%, 14%)');
    rootStyle.setProperty('---secondary-color-text', 'hsl(228, 12%, 44%)');
    rootStyle.setProperty('--secondary-color-title', ' hsl(228, 12%, 44%)');
  }
})