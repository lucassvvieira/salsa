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
				.withStringMatcher(StringMatcher.STARTING);
		
		System.out.println(donator.getFirstName());
		//System.out.println(donator.getLastName().length());
		
		Example<Donator> example = Example.of(donator, matcher);
		
		System.out.println(example.toString());
		List<Donator> donators = repository.findAll(example);
		if(donators.isEmpty()) {
			System.out.println("Empty response list :(");
		} else {
			System.out.println("List not empty!");
			
			for(Donator d: donators) {
				System.out.println(d.getFirstName()+  " "+ d.getLastName());
			}
			
		}
		return new ResponseEntity<List<Donator>>(donators, HttpStatus.OK);
	}
	/*
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public ResponseEntity<List<Donator>> search(String firstName, String lastName, String mothersName, String city, String sex, String bloodType,
			String bloodFactor, Boolean aptitude) {
		System.out.println(firstName+"\n"+lastName+"\n"+mothersName+"\n"+city+'\n'+sex+'\n'+bloodType+'\n'+bloodFactor+'\n'+aptitude);
		List<Donator> donators = repository.findByFirstNameAndLastNameAndMothersNameAndCityAndSexAndBloodTypeAndBloodFactorAndAptitudeAllIgnoreCase(
				firstName, lastName, mothersName, city, sex, bloodType, bloodFactor, aptitude);
		if(donators.isEmpty()) {
			System.out.println("Empty response list :(");
		} else {
			System.out.println("List not empty!");
			
			for(Donator d: donators) {
				System.out.println(d.getFirstName() + d.getLastName());
			}
			
		}
		return new ResponseEntity<List<Donator>>(donators, HttpStatus.OK);
	}
	*/
	
	@RequestMapping(value = "/statistics", method = RequestMethod.GET)
	public ResponseEntity<DonatorStats> getStats() {
		DonatorStats stats = new DonatorStats();
		
		// General people number query's
		stats.setDonatorsNumber(repository.count());
		stats.setMaleNumber(repository.countBySex("male"));
		stats.setFemaleNumber(repository.countBySex("female"));
		
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
		
		return new ResponseEntity<DonatorStats>(stats, HttpStatus.OK);
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
	public ResponseEntity<Donator> updateDonator(@PathVariable Long id, @RequestBody Donator donator) {
		Donator d = repository.findOne(id);
		if (d == null || d.getId() != donator.getId()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repository.saveAndFlush(donator);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
