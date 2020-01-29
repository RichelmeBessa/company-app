package br.com.baby.company.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.baby.company.models.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
