package br.ufes.salsa.salsa.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.ufes.salsa.salsa.model.Donator;
import br.ufes.salsa.salsa.repository.DonatorRepository;

@RequestMapping("/api/donators")
@RestController
public class DonatorController extends AbstractController<Donator, DonatorRepository>{
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<Donator> save(@RequestBody Donator d) {
		repository.save(d);
		return new ResponseEntity<Donator>(d, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Donator> delete(@PathVariable("id") Long id) {
		Donator d = repository.findOne(id);
		if (d != null) {
			repository.delete(d);
			return new ResponseEntity<Donator>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Donator>(HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Donator> updateDonator(@PathVariable Long id, @RequestBody Donator donator) {
		Donator d = repository.findOne(id);
		if (d == null || d.getId() != donator.getId()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repository.saveAndFlush(donator);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
