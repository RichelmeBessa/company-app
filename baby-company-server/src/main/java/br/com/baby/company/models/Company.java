package br.com.baby.company.models;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table
@Entity
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String registeredName;
	private String tradingName;
	private String taxPayerRegistration;
	private String stateSubscription;
	
	public Long getId() 
	{
		return id;
	}
	public void setId(Long id) 
	{
		this.id = id;
	}
	
	public String getRegisteredName() 
	{
		return registeredName;
	}
	public void setRegisteredName(String registeredName) 
	{
		this.registeredName = registeredName;
	}
	
	public String getTradingName() 
	{
		return tradingName;
	}
	public void setTradingName(String tradingName) 
	{
		this.tradingName = tradingName;
	}
	
	public String getTaxPayerRegistration() 
	{
		return taxPayerRegistration;
	}
	public void setTaxPayerRegistration(String taxPayerRegistration) 
	{
		this.taxPayerRegistration = taxPayerRegistration;
	}
	
	public String getStateSubscription() 
	{
		return stateSubscription;
	}
	public void setStateSubscription(String stateSubscription) 
	{
		this.stateSubscription = stateSubscription;
	}
	
}
