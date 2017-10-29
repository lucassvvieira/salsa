package br.ufes.salsa.salsa.model;

import java.util.List;

public class MessageStats {
	private long messagesDispatched;
	private long totalMessagesToRecipients;
	private List<SentMessage> messages;
	
	// Constructor
	public MessageStats(List<SentMessage> messages) {
		this.messages = messages;
		this.messagesDispatched = messages.size();
		this.totalMessagesToRecipients = 0;
		for(SentMessage m: messages) {
			this.totalMessagesToRecipients += m.getRecipients();
		}
		
	}
	
	// Getters and Setters
	public long getMessagesDispatched() {
		return messagesDispatched;
	}
	public void setMessagesDispatched(long messagesDispatched) {
		this.messagesDispatched = messagesDispatched;
	}
	public long getTotalMessagesToRecipients() {
		return totalMessagesToRecipients;
	}
	public void setTotalMessagesToRecipients(long totalMessagesToRecipients) {
		this.totalMessagesToRecipients = totalMessagesToRecipients;
	}
	public List<SentMessage> getMessages() {
		return messages;
	}
	public void setMessages(List<SentMessage> messages) {
		this.messages = messages;
	}
}
