const loadBuddies = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
  console.log(data)
  //console.log(data.results);
  const buddies = data.results;
  const buddyDiv = document.getElementById('buddies');
  for(const buddy of buddies){
   // console.log(buddy.name.first);
    const paragraph = document.createElement('p');
    paragraph.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
    buddyDiv.appendChild(paragraph) 
  }
}