package br.ufes.salsa.salsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.ufes.salsa.salsa.model.Donator;
import br.ufes.salsa.salsa.model.DonatorStats;
import br.ufes.salsa.salsa.repository.DonatorRepository;

@RequestMapping("/api/donators")
@RestController
public class DonatorController extends AbstractController<Donator, DonatorRepository>{
	@Autowired
	private DonatorRepository repository;
	
	@RequestMapping({"", "/"})
	public ResponseEntity<List<Donator>> index() {
		List<Donator> donators = repository.findAll();
		return new ResponseEntity<List<Donator>>(donators, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public ResponseEntity<List<Donator>> search(Donator donator) {
		ExampleMatcher matcher = ExampleMatcher
				.matching()
				.withIgnoreCase()
				//.withIncludeNullValues()
				.withIgnoreNullValues()
				.withStringMatcher(StringMatcher.STARTING)
				.withStringMatcher(StringMatcher.ENDING);
		
		// System.out.println(donator.getFirstName());
		// System.out.println(donator.getLastName().length());
		
		Example<Donator> example = Example.of(donator, matcher);
		
		List<Donator> donators = repository.findAll(example);
		return new ResponseEntity<List<Donator>>(donators, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/statistics", method = RequestMethod.GET)
	public ResponseEntity<DonatorStats> getStats() {
		DonatorStats stats = new DonatorStats();

		// General people number query's
		stats.setDonatorsNumber(repository.count());
		stats.setMaleNumber(repository.countBySex("masculino"));
		stats.setFemaleNumber(repository.countBySex("feminino"));
		
		// Blood numbers
		stats.setaPlusNumber(repository.countByBloodTypeAndBloodFactor("A", "+"));
		stats.setaMinusNumber(repository.countByBloodTypeAndBloodFactor("A", "-"));
		stats.setbPlusNumber(repository.countByBloodTypeAndBloodFactor("B", "+"));
		stats.setbMinusNumber(repository.countByBloodTypeAndBloodFactor("B", "-"));
		stats.setAbPlusNumber(repository.countByBloodTypeAndBloodFactor("AB", "+"));
		stats.setAbMinusNumber(repository.countByBloodTypeAndBloodFactor("AB", "-"));
		stats.setoPlusNumber(repository.countByBloodTypeAndBloodFactor("O", "+"));
		stats.setoMinusNumber(repository.countByBloodTypeAndBloodFactor("O", "-"));
		
		// Aptitude numbers
		stats.setAptNumber(repository.countByAptitude(true));
		stats.setUnaptNumber(repository.countByAptitude(false));
		
		/*
		System.out.println("Doadores -> " + stats.getDonatorsNumber());
		System.out.println("Homens -> " + stats.getMaleNumber());
		System.out.println("Mulheres -> " + stats.getFemaleNumber());
		System.out.println("Sangue A+ -> " + stats.getaPlusNumber());
		System.out.println("Sangue A- -> " + stats.getaMinusNumber());
		System.out.println("Sangue B+ -> " + stats.getbPlusNumber());
		System.out.println("Sangue B- -> " + stats.getbMinusNumber());
		System.out.println("Sangue O+ -> " + stats.getoPlusNumber());
		System.out.println("Sangue O- -> " + stats.getoMinusNumber());
		System.out.println("Sangue AB+ -> " + stats.getAbPlusNumber());
		System.out.println("Sangue AB- -> " + stats.getAbMinusNumber());
		*/
		
		return new ResponseEntity<DonatorStats>(stats, HttpStatus.OK);
	}
	
	
	@Override
	@RequestMapping(method=RequestMethod.GET, value="/{id}")
	public ResponseEntity<Donator> findOne(@PathVariable("id") Long id) {
		Donator d = repository.findOne(id);
		if (d != null) {
			return new ResponseEntity<Donator>(d, HttpStatus.OK);
		}
		return new ResponseEntity<Donator>(HttpStatus.NOT_FOUND);
	}
	
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
	public ResponseEntity<Donator> updateDonator(@PathVariable("id") Long id, @RequestBody Donator donator) {
		Donator d = repository.findOne(id);
		if (d == null || d.getId() != donator.getId()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repository.saveAndFlush(donator);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
