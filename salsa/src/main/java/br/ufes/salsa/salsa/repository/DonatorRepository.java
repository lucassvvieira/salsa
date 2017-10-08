package br.ufes.salsa.salsa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufes.salsa.salsa.model.Donator;

public interface DonatorRepository extends JpaRepository<Donator, Long> {
	
	List<Donator> findBySex(String sex);
	long countBySex(String sex);
	
	List<Donator> findByAptitude(Boolean aptitude);
	long countByAptitude(Boolean aptitude);
	
	List<Donator> findByBloodType(String bloodType);
	long countByBloodType(String bloodType);

	List<Donator> findByBloodFactor(String bloodFactor);
	long countByBloodFactor(String bloodFactor);
	
	List<Donator> findByBloodTypeAndBloodFactor(String bloodType, String bloodFactor);
	long countByBloodTypeAndBloodFactor(String bloodType, String bloodFactor);
	
	// Bear with me, I know this sounds ridiculous
	List<Donator> findByFirstNameAndLastNameAndMothersNameAndCityAndSexAndBloodTypeAndBloodFactorAndAptitude(
			String firstName, String lastName, String mothersName, String city, String sex, String bloodType,
			String bloodFactor, Boolean aptitude);
	List<Donator> countByFirstNameAndLastNameAndMothersNameAndCityAndSexAndBloodTypeAndBloodFactorAndAptitude(
			String firstName, String lastName, String mothersName, String city, String sex, String bloodType,
			String bloodFactor, Boolean aptitude);
}
