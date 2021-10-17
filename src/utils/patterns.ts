let sample: string = `{
    "Jane Doe": "jdoe@babbel.com",
    "Jay Arun": "jayarun@linkedin.com",
    "David Stein": "davidstein@google.com",
    "Mat Lee": "matlee@google.com",
    "Marta Dahl": "mdahl@babbel.com",
    "Vanessa Boom": "vboom@babbel.com"
  }`;

const obj = JSON.parse(sample);

export const intialNameEmailRule: string[] = [];
export const fullNameEmailRule: string[] = [];

const sorting = (data: object) => {
  for (const key in data) {
    const names = key.split(" ");
    const firstN = names[0].toLowerCase()
    const lastN = names[1].toLowerCase()
    const email = obj[key].split("@");
    const emailN = email[0];
    const domain = email[1];
    if (emailN == `${firstN}${lastN}` && !intialNameEmailRule.includes(domain)) {
      intialNameEmailRule.push(domain);
    } else if (emailN == `${firstN[0]}${lastN}` && !fullNameEmailRule.includes(domain)) {
      fullNameEmailRule.push(domain);
    }
  }
};

sorting(obj);
