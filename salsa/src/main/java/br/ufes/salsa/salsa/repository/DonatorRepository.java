package br.ufes.salsa.salsa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufes.salsa.salsa.model.Donator;



public interface DonatorRepository extends JpaRepository<Donator, Long> {

}
