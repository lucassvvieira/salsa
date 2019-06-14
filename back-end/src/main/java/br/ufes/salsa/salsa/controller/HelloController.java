package br.ufes.salsa.salsa.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class HelloController {
	
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping("/hi")
	public String hi() {
		return "Hello World!";
	}
}
