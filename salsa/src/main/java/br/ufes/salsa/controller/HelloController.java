package br.ufes.salsa.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@RequestMapping("/api/hi")
	public String hi() {
		return "Hello World!";
	}
}
