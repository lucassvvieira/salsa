package br.ufes.salsa.salsa.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import br.ufes.salsa.salsa.model.Message;
import br.ufes.salsa.salsa.repository.MessageRepository;

@RequestMapping("/api/messages")
@RestController
public class MessageController extends AbstractController<Message, MessageRepository>{
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Message> save(@RequestBody Message m) {
		repository.save(m);
		return new ResponseEntity<Message>(m, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Message> delete(@PathVariable("id") Long id) {
		Message m = repository.findOne(id);
		if (m != null) {
			repository.delete(m);
			return new ResponseEntity<Message>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Message>(HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Message> updateDonator(@PathVariable Long id, @RequestBody Message message) {
		Message m = repository.findOne(id);
		if (m == null || m.getId() != message.getId()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repository.saveAndFlush(message);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}