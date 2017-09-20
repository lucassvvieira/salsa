package br.ufes.salsa.salsa.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "donator")
public class Donator extends AbstractModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	// General names
	private String firstName;
	private String lastName;
	private String mothersName;
	private String fathersName;
	
	// Dates
	private Date birth;
	private Date lastDonation;
	private Date registerDate;
	
	// Address
	private String state;
	private String city;
	private String neighborhood;
	private String street;
	private String complement;
	private String cep;
	
	// Blood data
	private Blood bloodType;
	private String bloodFactor;
	
	// Donator other data
	private String phone;
	private String color;
	private String profession;
	private String nacionality;
	private String civilState;
	private String rg;
	private String cpg;
	private String cnh;
	
	// Getters and Setters
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMothersName() {
		return mothersName;
	}
	public void setMothersName(String mothersName) {
		this.mothersName = mothersName;
	}
	public String getFathersName() {
		return fathersName;
	}
	public void setFathersName(String fathersName) {
		this.fathersName = fathersName;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public Date getLastDonation() {
		return lastDonation;
	}
	public void setLastDonation(Date lastDonation) {
		this.lastDonation = lastDonation;
	}
	public Date getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getNeighborhood() {
		return neighborhood;
	}
	public void setNeighborhood(String neighborhood) {
		this.neighborhood = neighborhood;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getComplement() {
		return complement;
	}
	public void setComplement(String complement) {
		this.complement = complement;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public Blood getBloodType() {
		return bloodType;
	}
	public void setBloodType(Blood bloodType) {
		this.bloodType = bloodType;
	}
	public String getBloodFactor() {
		return bloodFactor;
	}
	public void setBloodFactor(String bloodFactor) {
		this.bloodFactor = bloodFactor;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getNacionality() {
		return nacionality;
	}
	public void setNacionality(String nacionality) {
		this.nacionality = nacionality;
	}
	public String getCivilState() {
		return civilState;
	}
	public void setCivilState(String civilState) {
		this.civilState = civilState;
	}
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	public String getCpg() {
		return cpg;
	}
	public void setCpg(String cpg) {
		this.cpg = cpg;
	}
	public String getCnh() {
		return cnh;
	}
	public void setCnh(String cnh) {
		this.cnh = cnh;
	}
	
}
