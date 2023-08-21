import Tickets from "../models/entities/Tickets.model.js";
import { cartRepository } from "../repositories/cart.repositrie.js";
import { productsRepository } from "../repositories/product.repositorie.js";
import { ticketsRepository } from "../repositories/ticket.repository.js";
import { userRepository } from "../repositories/users.repository.js";
import { emailService } from "./email.service.js";

class PurcheaseService {
  constructor() {}

  async createTicket(data) {
    const productsInCart = await cartRepository.getProductsInCartById(
      data.cart
    );
    productsInCart.forEach((e) => {
      if (e.product.stock < e.quantity) {
        e.quantity = e.product.stock;
      }
    });
    const user = await userRepository.findOne({ cart: data.cart });
    const userEmail = user.email;
    const amountArray = productsInCart.map((p) => p.product.price * p.quantity);
    const initp = 0;
    const amount = amountArray.reduce((acum, pprice) => {
      return acum + pprice;
    }, initp);
    const info_tikcet = {
      amount: amount,
      purcheaser: userEmail,
    };
    const dataticket = new Tickets(info_tikcet);
    const ticket = await ticketsRepository.add(dataticket.dto());
    const mailData = {
      subject: "Confirmacion de Compra --Astros",
      mensaje: `Hola,\n\n
           Gracias por su compra en nuestra tienda, Te esperamos para el proximo partido.\n
           N°Compra: ${ticket.code} \n
           Total: $${ticket.amount}\n\n
          Abrazo de gol\n
          Astros ⭐`,
    };
    await emailService.send(userEmail, mailData);
    await this.adjustStock(data);
    if (process.env.PERSISTENCIA !== "mongoose") {
      await cartRepository.delAllProductsInCart(data.cart);
    }
    return ticket;
  }

  async adjustStock(data) {
    const productsStocker = await cartRepository.getProductsInCartById(
      data.cart
    );
    for (const prod of productsStocker) {
      if (process.env.PERSISTENCIA !== "mongoose") {
        await productsRepository.updateOne(prod.product.id, {
          stock: prod.product.stock - prod.quantity,
        });
      } else {
        await productsRepository.updateOne(prod.product.id, {
          $inc: { stock: -prod.quantity },
        });
      }
    }
  }
}

export const ticketService = new PurcheaseService();
