import { RequestHandler } from "express";
import { intialNameEmailRule, fullNameEmailRule } from "../utils/patterns.js";

export const getDerivation: RequestHandler = (req, res, next) => {
  const { firstName, lastName, domain } = req.body;
  if (!firstName || !lastName || !domain )
    res.status(400).send({
      status: 400,
      error: "All fields are required",
    });
  let id = Date.now();
  console.log(intialNameEmailRule);
  if (intialNameEmailRule.includes(domain)) {
    let response = {
      email: `${firstName[0]}${lastName}@${domain}`,
      id: id,
    };
    res.json(response);
  } else if (fullNameEmailRule.includes(domain)) {
    let response = {
      email: `${firstName}${lastName}@${domain}`,
      id: id,
    };
    res.json(response);
  } else {
    res.status(404).send({
      status: 404,
      error: "We are sorry, no email can be generated for this domain",
    });
  }
};
