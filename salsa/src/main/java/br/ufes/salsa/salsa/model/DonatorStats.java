package br.ufes.salsa.salsa.model;

public class DonatorStats {
	private long donatorsNumber;
	
	// Male/Female donator numbers
	private long maleNumber;
	private long femaleNumber;
	
	// Blood type donator numbers
	private long aPlusNumber;
	private long aMinusNumber;
	private long bPlusNumber;
	private long bMinusNumber;
	private long abPlusNumber;
	private long abMinusNumber;
	private long oPlusNumber;
	private long oMinusNumber;
	
	// Aptitude-related numbers
	private long aptNumber;
	private long unaptNumber;
	private long maleAptNumber;
	private long maleUnaptNumber;
	private long femaleAptNumber;
	private long femaleUnaptNumber;
	
	// Public constructor
	public DonatorStats() {
		this.donatorsNumber = 0;
		this.maleNumber = 0;
		this.femaleNumber = 0;
		this.aPlusNumber = 0;
		this.aMinusNumber = 0;
		this.bPlusNumber = 0;
		this.bMinusNumber = 0;
		this.abPlusNumber = 0;
		this.abMinusNumber = 0;
		this.oPlusNumber = 0;
		this.oMinusNumber = 0;
		this.aptNumber = 0;
		this.unaptNumber = 0;
		this.maleAptNumber = 0;
		this.maleUnaptNumber = 0;
		this.femaleAptNumber = 0;
		this.femaleUnaptNumber = 0;
	}
	
	// Getters and Setters
	public long getDonatorsNumber() {
		return donatorsNumber;
	}
	public void setDonatorsNumber(long donatorsNumber) {
		this.donatorsNumber = donatorsNumber;
	}
	public long getMaleNumber() {
		return maleNumber;
	}
	public void setMaleNumber(long maleNumber) {
		this.maleNumber = maleNumber;
	}
	public long getFemaleNumber() {
		return femaleNumber;
	}
	public void setFemaleNumber(long femaleNumber) {
		this.femaleNumber = femaleNumber;
	}
	public long getaPlusNumber() {
		return aPlusNumber;
	}
	public void setaPlusNumber(long aPlusNumber) {
		this.aPlusNumber = aPlusNumber;
	}
	public long getaMinusNumber() {
		return aMinusNumber;
	}
	public void setaMinusNumber(long aMinusNumber) {
		this.aMinusNumber = aMinusNumber;
	}
	public long getbPlusNumber() {
		return bPlusNumber;
	}
	public void setbPlusNumber(long bPlusNumber) {
		this.bPlusNumber = bPlusNumber;
	}
	public long getbMinusNumber() {
		return bMinusNumber;
	}
	public void setbMinusNumber(long bMinusNumber) {
		this.bMinusNumber = bMinusNumber;
	}
	public long getAbPlusNumber() {
		return abPlusNumber;
	}
	public void setAbPlusNumber(long abPlusNumber) {
		this.abPlusNumber = abPlusNumber;
	}
	public long getAbMinusNumber() {
		return abMinusNumber;
	}
	public void setAbMinusNumber(long abMinusNumber) {
		this.abMinusNumber = abMinusNumber;
	}
	public long getoPlusNumber() {
		return oPlusNumber;
	}
	public void setoPlusNumber(long oPlusNumber) {
		this.oPlusNumber = oPlusNumber;
	}
	public long getoMinusNumber() {
		return oMinusNumber;
	}
	public void setoMinusNumber(long oMinusNumber) {
		this.oMinusNumber = oMinusNumber;
	}
	public long getAptNumber() {
		return aptNumber;
	}
	public void setAptNumber(long aptNumber) {
		this.aptNumber = aptNumber;
	}
	public long getUnaptNumber() {
		return unaptNumber;
	}
	public void setUnaptNumber(long unaptNumber) {
		this.unaptNumber = unaptNumber;
	}
	public long getMaleAptNumber() {
		return maleAptNumber;
	}
	public void setMaleAptNumber(long maleAptNumber) {
		this.maleAptNumber = maleAptNumber;
	}
	public long getMaleUnaptNumber() {
		return maleUnaptNumber;
	}
	public void setMaleUnaptNumber(long maleUnaptNumber) {
		this.maleUnaptNumber = maleUnaptNumber;
	}
	public long getFemaleAptNumber() {
		return femaleAptNumber;
	}
	public void setFemaleAptNumber(long femaleAptNumber) {
		this.femaleAptNumber = femaleAptNumber;
	}
	public long getFemaleUnaptNumber() {
		return femaleUnaptNumber;
	}
	public void setFemaleUnaptNumber(long femaleUnaptNumber) {
		this.femaleUnaptNumber = femaleUnaptNumber;
	}
}
