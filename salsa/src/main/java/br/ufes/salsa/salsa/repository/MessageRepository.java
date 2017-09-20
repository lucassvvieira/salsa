package br.ufes.salsa.salsa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufes.salsa.salsa.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
