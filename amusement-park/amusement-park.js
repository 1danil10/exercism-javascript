/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */

export function ticketStatus(tickets, ticketId) {
  let status;
  if (!Object.prototype.hasOwnProperty.call(tickets, ticketId)) {
    status = 'unknown ticket id';
  } else if (tickets[ticketId] === null) {
    status = 'not sold';
  } else {
    status = `sold to ${tickets[ticketId]}`;
  }
  return status;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let status;
  const ticketOwner = tickets[ticketId];
  if (
    Object.prototype.hasOwnProperty.call(tickets, ticketId) &&
    ticketOwner !== null
  ) {
    status = ticketOwner;
  } else {
    status = 'invalid ticket !!!';
  }
  return status;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}
