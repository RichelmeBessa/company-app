package br.com.baby.company.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.baby.company.models.Company;
import br.com.baby.company.repositories.CompanyRepository;

@CrossOrigin
@RestController
@RequestMapping("/companies")
public class CompanyController {
	
	private CompanyRepository repository;
	
	public CompanyController(CompanyRepository repository)
	{
		this.repository = repository;
	}
	
	@GetMapping
	public List<Company> findAll()
	{
		return this.repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Company find(@PathVariable("id") Long id)
	{
		Optional<Company> optional = this.repository.findById(id);
		
		if (optional.isPresent()) {
			return optional.get();
		} else {
			throw new RuntimeException("Company with id " + id + " not found.");
		}
		
	}
	
	@PostMapping
	public Company save(@RequestBody Company company)
	{
		if ( company.getRegisteredName() == null || company.getStateSubscription() == null || company.getTaxPayerRegistration() == null || company.getTradingName() == null) {
			throw new RuntimeException("Invalid Data");
		}
		
		return this.repository.save(company);
	}
	
	@DeleteMapping("/{id}")
	public Company delete(@PathVariable(name = "id") Long id)
	{
		Optional<Company> optional = this.repository.findById(id);
		
		if (optional.isPresent()) {
			Company company = optional.get();
			this.repository.deleteById(id);
			return company;
		} else {
			throw new RuntimeException("Company with id " + id + " not found.");
		}
	}
	
}
