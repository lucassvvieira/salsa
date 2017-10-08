package br.ufes.salsa.salsa.repository;

import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufes.salsa.salsa.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
	LocalDate firstDayofCurrentMonth = LocalDate.now().with(TemporalAdjusters.firstDayOfMonth());
	LocalDate lastDayofCurrentMonth = LocalDate.now().with(TemporalAdjusters.lastDayOfMonth());
	
	
	List<Message> findBySendDate(LocalDate sendDate);
	long countBySendDate(LocalDate sendDate);
	
	List<Message> findBySendDateBetween(LocalDate firstDayofCurrentMonth, LocalDate lastDayofCurrentMonth);
	long countBySendDateBetween(LocalDate firstDayofCurrentMonth, LocalDate lastDayofCurrentMonth);
	
}
