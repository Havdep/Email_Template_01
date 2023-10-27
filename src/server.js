// mirage/server.js
// mirage/server.js

import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      template: Model,
    },

    seeds(server) {
      server.create("template", {
        id: 1,
        name: "New Product Launch",
        imageUrl:
          "https://images.unsplash.com/photo-1697639171123-0fd9f3a4e1b5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
        description: "Announcing our new product...",
        type: "announcements",
      });

      server.create("template", {
        id: 2,
        name: "Company Update",
        imageUrl:
          "https://images.unsplash.com/photo-1697639171123-0fd9f3a4e1b5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",

        description: "Here's a company update...",
        type: "announcements",
      });
      server.create("template", {
        id: 3,
        name: "Event Invitation",
        imageUrl:
          "https://images.unsplash.com/photo-1697639171123-0fd9f3a4e1b5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",

        description: "You are invited to our event...",
        type: "announcements",
      });

      // Newsletters
      server.create("template", {
        id: 4,
        name: "Monthly Digest",
        imageUrl:
          "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D",

        description: "All the news from last month...",
        type: "newsletter",
      });

      server.create("template", {
        id: 5,
        name: "Curated Content",
        imageUrl:
          "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D",

        description: "This week s curated content...",
        type: "newsletter",
      });

      server.create("template", {
        id: 6,
        name: "Weekly Roundup",
        imageUrl:
          "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D",

        description: "The past week in review...",
        type: "newsletter",
      });

      // Holidays
      server.create("template", {
        id: 7,
        name: "Happy Holidays",
        imageUrl:
          "https://images.unsplash.com/photo-1486571698588-a2204703bec8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheXN8ZW58MHx8MHx8fDA%3D",

        description: "Happy holidays from our team!",
        type: "holiday",
      });

      server.create("template", {
        id: 8,
        name: "Holiday Sale",
        imageUrl:
          "https://images.unsplash.com/photo-1486571698588-a2204703bec8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheXN8ZW58MHx8MHx8fDA%3D",

        description: "Get 40% off this holiday season!",
        type: "holiday",
      });

      server.create("template", {
        id: 9,
        name: "Holiday Party Invite",
        imageUrl:
          "https://images.unsplash.com/photo-1486571698588-a2204703bec8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheXN8ZW58MHx8MHx8fDA%3D",

        description: "You are invited to our holiday party!",
        type: "holiday",
      });

      // Transactional
      server.create("template", {
        id: 10,
        name: "Order Confirmation",
        imageUrl:
          "https://images.unsplash.com/photo-1695653422287-81cfeeb96ade?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhbnNhY3Rpb258ZW58MHx8MHx8fDA%3D",

        description: "Your order has been confirmed...",
        type: "transactional",
      });

      server.create("template", {
        id: 11,
        name: "Shipping Notification",
        imageUrl:
          "https://images.unsplash.com/photo-1695653422287-81cfeeb96ade?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhbnNhY3Rpb258ZW58MHx8MHx8fDA%3D",

        description: "Your order has shipped...",
        type: "transactional",
      });

      server.create("template", {
        id: 12,
        name: "Password Reset",
        imageUrl:
          "https://images.unsplash.com/photo-1695653422287-81cfeeb96ade?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhbnNhY3Rpb258ZW58MHx8MHx8fDA%3D",

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
