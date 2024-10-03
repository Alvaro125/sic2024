import Link from "../models/Link";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try{
    const link = new Link()
    if(query.link){
      return await Link.findOne({content:query.link});
    }else{
      return await Link.find({});
    }
  }catch (error:any) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      })
    }
});
