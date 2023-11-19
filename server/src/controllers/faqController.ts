import { Request, Response } from "express";
import { FAQModel } from "../models/faq";

/**
 * CREATE SINGLE FAQ
 * api/faq/create
 */

module.exports.createFAQ = async (req: Request, res: Response) => {
    try {
        const faq = await FAQModel.create({
            title: req.body.title,
            description: req.body.description,
        });
        return res.status(201).json(faq);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}

/**
 * GET ALL FAQs
 * api/faq/all
 */

module.exports.getFAQs = async (req: Request, res: Response) => {
    try {
        const faq = await FAQModel.find({});
        return res.status(200).json(faq);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}

/**
 * UPDATE SINGLE FAQ
 * api/faq/update/:id
 */

exports.editFAQ = async (req: Request, res: Response) => {
    try {
      const faq = await FAQModel.findById(req.params.id);
      if (faq) {
        faq.title = req.body.title || faq.title;
        faq.description = req.body.description || faq.description;
        const updatedFAQ = await faq.save();
        res.send({ updatedFAQ });
      } else {
        res.status(400).json({
          message: "FAQ not found!",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };

/**
 * DELETE SINGLE FAQ
 * api/faq/delete/:id
 */

exports.deleteFAQ = async (req: Request, res: Response) => {
    try {
      const faq = await FAQModel.findById(req.params.id);
      if (faq) {
        const deletedFAQ = await faq.deleteOne();
        res.status(200).send({ deletedFAQ });
      }
      else {
        res.status(400).json({
          message: "FAQ not found!",
        });
      }
  
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };