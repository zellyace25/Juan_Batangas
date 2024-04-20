import {
  Facebook,
  Website,
  Tweeter,
  Youtube,
  Location,
  Phone,
  Email,
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  VISIT1,
  VISIT2,
  VISIT3,
} from "./Images";

const resources = [
  {
    socialIcons: [Facebook, Website, Tweeter, Youtube],
    navigationBar: [
      "Government",
      "Programs and Services",
      "News and Events",
      "About us",
    ],
    governmentLinks: [
      "Official Gazette",
      "The President",
      "Office of the President",
      "Office of the Vice President",
      "Senate of the Philippines",
      "House of Representatives",
      "Supreme Court",
      "Sandiganbayan",
    ],
    contactIcons: [Location, Phone, Email],
    contactInfos: [
      "Provincial Capitol Bldg., Batangas City, 4200, Batangas",
      " (043) 723-4651",
      "batspiocapitol@yahoo.com",
    ],
    textGradients: ["History", "Mission", "Vision"],
    carousels: [Carousel1, Carousel2, Carousel3, Carousel4],
    visits: [VISIT1, VISIT2, VISIT3],
  },
];

export default resources;
