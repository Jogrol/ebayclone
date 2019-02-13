import {Controller, Get, Param} from 'routing-controllers'
import Advertisements from './advertisements/entity'

@Controller()
export default class MainController {

    @Get("/advertisments")
    async allAds() {
      const advertisements = await Advertisements.find();
      return { advertisements };
    }

    @Get("/advertisments/:id")
    getAd(@Param("id") id: number) {
      return Advertisements.findOne(id);
    }
}