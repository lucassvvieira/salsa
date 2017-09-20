package br.ufes.salsa.salsa.model;

public enum Blood {
	O {
		@Override
		public String toString() {
			return "O";
		}
	},
	A {
		@Override
		public String toString() {
		return "A";
		}
	},
	B {
		@Override
		public String toString() {
			return "B";
		}
	},
	AB {
		@Override
		public String toString() {
			return "AB";
		}
	}
}
