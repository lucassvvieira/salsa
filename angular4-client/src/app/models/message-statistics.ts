import { Message } from './message';

export class MessageStatistics {
    messagesDispatched: number;
    totalMessagesToRecipients: number;
    messages: Message[];
}
