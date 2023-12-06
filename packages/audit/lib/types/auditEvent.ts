import { AuditEventTypes } from '../enums';
/**
 * Represents an Audit Event.
 */
export type AuditEvent = {
  /**
   * UUID of the audit event.
   * @example aaaaaaaa-bbbb-cccc-dddd-0123456789ab
   */
  id: string;

  /**
   * The type of the audit event.
   * @example APP_CREATE
   *
   */
  eventType: AuditEventTypes | string;

  /**
   * The date when the audit event was created.
   * @example 2018-07-04T11:41:32
   */
  createdAt: string;

  /**
   * Email of the user whose account the audit event is associated with.
   * @example user@example.org
   */
  userEmail?: string;

  /**
   * The ID of the user that the audit event is associated with.
   * @example 1234567
   */
  userId?: string;

  /**
   * The API_KEY of the Vonage API account that the audit event is associated with.
   * @example abcd1234
   */
  accountId: string;

  /**
   * The source of the event.
   * @example CD
   */
  source: 'CD' | 'DEVAPI';

  /**
   * Description of the audit event source.
   * @example Customer Dashboard
   */
  sourceDescription: 'Customer Dashboard' | 'Developer API';

  /**
   * ISO 3166-1 Alpha-2 country code recorded for the event.
   * @example GB
   */
  sourceCountry: string;

  /**
   * Additional context information for the audit event.
   */
  context?: unknown;
}
