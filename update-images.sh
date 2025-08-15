#!/bin/bash

echo "🔄 Updating Spothaus landing page images..."

# Copy screenshots to public
echo "📱 Copying screenshots..."
cp screenshots/*.PNG public/ 2>/dev/null || echo "No screenshots to copy"

# Copy app icon to public
echo "🎯 Copying app icon..."
cp assets/spothaus_app_icon.png public/ 2>/dev/null || echo "No app icon to copy"

echo "✅ Images updated! Refresh your browser to see changes."
echo "🌐 Your landing page is running at: http://localhost:3000"
