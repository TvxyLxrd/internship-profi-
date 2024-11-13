import javax.swing.*;
import java.awt.*;

public class RocketDrawing extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Установка цвета для фона
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, getWidth(), getHeight());

        // Рисование ракеты
        g.setColor(Color.GRAY);
        g.fillPolygon(new int[]{150, 130, 170}, new int[]{50, 150, 150}, 3); // Верхушка ракеты

        g.setColor(Color.LIGHT_GRAY);
        g.fillRect(130, 150, 40, 100); // Тело ракеты

        g.setColor(Color.DARK_GRAY);

        // Левый хвост
        g.fillPolygon(new int[]{130, 120, 150}, new int[]{250, 300, 300}, 3);

        // Правый хвост
        g.fillPolygon(new int[]{170, 180, 150}, new int[]{250, 300, 300}, 3);

        g.setColor(Color.LIGHT_GRAY);
        g.fillPolygon(new int[]{130, 170, 150}, new int[]{250, 250, 300}, 3); // Низ ракеты

        g.setColor(Color.BLACK);
        g.fillOval(135, 200, 30, 50); // Окно ракеты
    }
}
