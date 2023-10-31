// mirage/server.js
// mirage/server.js

import { createServer, Model } from "miragejs";

export function makeServer() {
  function getRandomPopularity() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function getRandomDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    return randomDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  }
  const startDate = "2023-01-01"; // Start date
  const endDate = "2023-12-31"; // End date

  let server = createServer({
    models: {
      template: Model,
    },

    seeds(server) {
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 1,
        name: "New Product Launch",
        imageUrl: "https://picsum.photos/id/524/284/228",
        description: "Announcing our new product...",
        type: "announcements",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 2,
        name: "Company Update",
        imageUrl:
          "https://images.unsplash.com/photo-1697639171123-0fd9f3a4e1b5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",

        description: "Here's a company update...",
        type: "announcements",
      });
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 3,
        name: "Event Invitation",
        imageUrl: "https://picsum.photos/id/584/284/228",

        description: "You are invited to our event...",
        type: "announcements",
      });

      // Newsletters
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 4,
        name: "Monthly Digest",
        imageUrl: "https://picsum.photos/id/684/284/228",

        description: "All the news from last month...",
        type: "newsletter",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 5,
        name: "Curated Content",
        imageUrl: "https://picsum.photos/id/4/284/228",

        description: "This week s curated content...",
        type: "newsletter",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 6,
        name: "Weekly Roundup",
        imageUrl:
          "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D",

        description: "The past week in review...",
        type: "newsletter",
      });

      // Holidays
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 7,
        name: "Happy Holidays",
        imageUrl: "https://picsum.photos/id/149/284/228",

        description: "Happy holidays from our team!",
        type: "holiday",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 8,
        name: "Holiday Sale",
        imageUrl: "https://picsum.photos/id/324/284/228",

        description: "Get 40% off this holiday season!",
        type: "holiday",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 9,
        name: "Holiday Party Invite",
        imageUrl:
          "https://images.unsplash.com/photo-1486571698588-a2204703bec8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheXN8ZW58MHx8MHx8fDA%3D",

        description: "You are invited to our holiday party!",
        type: "holiday",
      });

      // Transactional
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 10,
        name: "Order Confirmation",
        imageUrl: "https://picsum.photos/id/39/284/228",

        description: "Your order has been confirmed...",
        type: "transactional",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 11,
        name: "Shipping Notification",
        imageUrl: "https://picsum.photos/id/784/284/228",

        description: "Your order has shipped...",
        type: "transactional",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 12,
        name: "Password Reset",
        imageUrl:
          "https://images.unsplash.com/photo-1695653422287-81cfeeb96ade?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhbnNhY3Rpb258ZW58MHx8MHx8fDA%3D",

        description: "Reset your account password...",
        type: "transactional",
      });
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 13,
        name: "Location Added",
        imageUrl: "https://picsum.photos/seed/picsum/284/228",
        description: "Announcing our new product...",
        type: "announcements",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 14,
        name: "Hello Winters",
        imageUrl: "https://picsum.photos/id/284/284/228",

        description: "Here's a company update...",
        type: "announcements",
      });
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 15,
        name: "La beauté",
        imageUrl: "https://picsum.photos/id/24/284/228",
        description: "You are invited to our event...",
        type: "announcements",
      });

      // Newsletters
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 16,
        name: "Weekly Highlights",
        imageUrl: "https://picsum.photos/id/98/284/228",
        description: "All the news from last month...",
        type: "newsletter",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 17,
        name: "Welcome Students",
        imageUrl: "https://picsum.photos/id/678/284/228",
        description: "This week s curated content...",
        type: "newsletter",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 18,
        name: "Brew Recepies",
        imageUrl: "https://picsum.photos/id/44/284/228",
        description: "The past week in review...",
        type: "newsletter",
      });

      // Holidays
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 19,
        name: "Ibiza Luxury",
        imageUrl: "https://picsum.photos/id/165/284/228",
        description: "Happy holidays from our team!",
        type: "holiday",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 20,
        name: "Black Friday Sale",
        imageUrl: "https://picsum.photos/id/99/284/228",
        description: "Get 40% off this holiday season!",
        type: "holiday",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 21,
        name: "Giving Tuesdays",
        imageUrl: "https://picsum.photos/id/369/284/228",
        description: "You are invited to our holiday party!",
        type: "holiday",
      });

      // Transactional
      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 22,
        name: "Restaurant",
        imageUrl: "https://picsum.photos/id/26/284/228",
        description: "Your order has been confirmed...",
        type: "transactional",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 23,
        name: "Order Delivered",
        imageUrl: "https://picsum.photos/id/169/284/228",
        description: "Your order has shipped...",
        type: "transactional",
      });

      server.create("template", {
        date: getRandomDate(startDate, endDate),
        popularity: getRandomPopularity(),
        id: 24,
        name: "Account Hacked!",
        imageUrl: "https://picsum.photos/id/62/284/228",
        description: "Reset your account password...",
        type: "transactional",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/", () => {
        return {
          templates: this.schema.all("template"),
        };
      });
    },
  });

  return server;
}
