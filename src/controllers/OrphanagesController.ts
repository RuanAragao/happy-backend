import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanages';
import OrphanageView from '../views/orphanages_view';

export default {
  async index (request: Request, response: Response, next: NextFunction) {
    try {
      const orphanagesRepository = getRepository(Orphanage);

      const orphanages = await orphanagesRepository.find({
        relations: ['images']
      });
      return response.status(200).json(OrphanageView.renderMany(orphanages));
    } catch (error) {
      return response.status(300).json(error);
    }
  },

  async show (request: Request, response: Response) {
    try {
      const { id } = request.params;
      const orphanagesRepository = getRepository(Orphanage);

      const orphanage = await orphanagesRepository.findOneOrFail(id, {
        relations: ['images']
      })
      return response.status(200).json(OrphanageView.render(orphanage));
    } catch (error) {
      return response.status(300).json(error);
    }
  },

  async create (request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
}