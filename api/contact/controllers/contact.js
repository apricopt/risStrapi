'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {


    async create(ctx) {
        let entity;
        // if (ctx.is('multipart')) {
        //     const { data, files } = parseMultipartData(ctx);
        //     entity = await strapi.services.contact.create(data, { files });
        // } else {
        //     entity = await strapi.services.contact.create(ctx.request.body);
        // }
        console.log(ctx)
        //  return sanitizeEntity(entity, { model: strapi.models.contact });
        return ctx.req.body
    },
};
