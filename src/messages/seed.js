const messages = [
    {
        user: { name: "Aiga Liere", id: 1, isConnected: true, photo: "https://images.unsplash.com/photo-1624629769948-1eec367b8e64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" },
        messages: [
            {
                id: 1,
                text: "Čau, kā iet?",
                isRead: false,
                date: new Date(),
                type: "recieved"
            },
            {
                id: 2,
                text: "Čau. Labi iet. Šodien darbā.",
                isRead: true,
                date: new Date(),
                type: "sent"
            },
            {
                id: 3,
                text: "kā pašai iet?",
                isRead: true,
                date: new Date(),
                type: "sent"
            },
            {
                id: 4,
                text: "Esmu pašreiz Valmierā. Garlaikojos.",
                isRead: true,
                date: new Date(),
                type: "recieved"
            },
            {
                id: 55,
                text: "Un daudz domāju.",
                isRead: false,
                date: new Date(),
                type: "recieved"
            }
        ]
    },
    {
        user: { name: "Toms Igaunis", id: 3, isConnected: false, photo: "https://images.unsplash.com/photo-1624629769948-1eec367b8e64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" },
        messages: [
            {
                id: 5,
                text: "Labdien! Kautkur esi redzēts!!!!",
                isRead: true,
                date: new Date(),
                type: "sent"
            },
            {
                id: 6,
                text: ":D hahhahaha, tu arī",
                isRead: true,
                date: new Date(),
                type: "recieved"
            },
            {
                id: 7,
                text: "gribi draudzēties??? :D",
                isRead: true,
                date: new Date(),
                type: "recieved"
            },
            {
                id: 8,
                text: "Labprāt!!!!!!!!",
                isRead: true,
                date: new Date(),
                type: "sent"
            },
            {
                id: 9,
                text: "Labprāt!!!!!!!!",
                isRead: true,
                date: new Date(),
                type: "sent"
            },
            {
                id: 10,
                text: "Labprāt!!!!!!!!",
                isRead: true,
                date: new Date(),
                type: "sent"
            },
            {
                id: 10,
                text: "Kautkāds nonsens",
                isRead: true,
                date: new Date(),
                type: "recieved"
            }
        ]
    }
]
export default messages;