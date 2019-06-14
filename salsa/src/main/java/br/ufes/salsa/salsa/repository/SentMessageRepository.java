package br.ufes.salsa.salsa.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import br.ufes.salsa.salsa.model.SentMessage;

public interface SentMessageRepository extends JpaRepository<SentMessage, Long> {
	List<SentMessage> findBySendingDate(Date sendingDate);
	long countBySendingDate(Date sendingDate);
	
	List<SentMessage> findBySendingDateBetween(Date firstDayofCurrentMonth, LocalDate lastDayofCurrentMonth);
	long countBySendingDateBetween(Date firstDayofCurrentMonth, Date lastDayofCurrentMonth);
	
}
