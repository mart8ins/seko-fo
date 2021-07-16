
const users = [
{
    id: 111,
    firstName: "Baiba",
    lastName: "Briede",
    photo: "https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    connections: {
        connected: [
            {
                user: {firstName: "Zintis", lastName: "Zirnis", id: 112},
                connectedDate: new Date()
              }
          ]
    }
},
{
    id: 112,
    firstName: "Zintis",
    lastName: "Zirnis",
    photo: "https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    connections: {
        connected: [
            {
              user: {firstName: "Baiba", lastName: "Briede", id: 111},
              connectedDate: new Date()
            }
          ]
    }
},
{
    id: 1,
    firstName: "Inese",
    lastName: "Maca",
    photo: "https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    connections: {
        connected: [
            {
              user: {firstName: "Martins", lastName: "Skinkis", id: 0},
              connectedDate: new Date()
            }
          ]
    }
},
{
    id: 2,
    firstName: "Aiga",
    lastName: "Liere",
    photo: "https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    connections: {
        connected: [
            {
              user: {firstName: "Martins", lastName: "Skinkis", id: 0},
              connectedDate: new Date()
            }
          ]
    }
},
{
    id: 3,
    firstName: "Ingus Macs",
    lastName: "Maca",
    photo: "https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    connections: {
        connected: [
            {
              user: {firstName: "Martins", lastName: "Skinkis", id: 0},
              connectedDate: new Date()
            }
          ]
    }
},
{
    id: 4,
    firstName: "Toms",
    lastName: "Igaunis",
    photo: "https://images.unsplash.com/photo-1626155215432-f2eb18552910?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    connections: {
        connected: [
            {
              user: {firstName: "Martins", lastName: "Skinkis", id: 0},
              connectedDate: new Date()
            }
          ]
    }
}
]

module.exports.users = users;