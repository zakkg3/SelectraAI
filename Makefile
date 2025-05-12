# SelectraAI Landing Page Makefile

.PHONY: serve clean help

# Default target
.DEFAULT_GOAL := help

# Variables
PORT = 8080

# Help command
help:
	@echo "SelectraAI Landing Page Development Commands"
	@echo "----------------------------------------"
	@echo "make serve  - Start a local development server on port $(PORT)"
	@echo "make clean  - Remove temporary files"
	@echo "make help   - Show this help message"

# Start a local development server
serve:
	@echo "Starting local development server on http://localhost:$(PORT)"
	@echo "Press Ctrl+C to stop the server"
	python3 -m http.server $(PORT) || python -m http.server $(PORT)

# Clean temporary files
clean:
	@echo "Cleaning temporary files..."
	find . -name "*.DS_Store" -type f -delete
	@echo "Done!"