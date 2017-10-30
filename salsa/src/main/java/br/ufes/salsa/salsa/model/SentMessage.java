package br.ufes.salsa.salsa.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "sentMessage")
public class SentMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date sendingDate;
	private long recipients;
	private String body;
	
	
	public SentMessage(Date sendingDate, long recipients, String body) {
		super();
		this.sendingDate = sendingDate;
		this.recipients = recipients;
		this.body = body;
	}
	
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Date getSendingDate() {
		return sendingDate;
	}
	public void setSendingDate(Date sendingDate) {
		this.sendingDate = sendingDate;
	}
	public long getRecipients() {
		return recipients;
	}
	public void setRecipients(long recipients) {
		this.recipients = recipients;
	}
	
}	
